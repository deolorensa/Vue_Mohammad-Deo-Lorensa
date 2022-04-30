// import Vue from 'vue'
// import App from './App.vue'
// import VueApollo from 'vue-apollo'
// import ApolloClient from 'apollo-boost'

// Vue.use(VueApollo)

// Vue.config.productionTip = false


// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'https://civil-kid-38.hasura.app/v1/graphql'
//   //'https://api.graphcms.com/simple/v1/awesomeTalksClone'
// })

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

// new Vue({
//   el: '#app',
//   // inject apolloProvider here like vue-router or vuex
//   apolloProvider,
//   render: h => h(App),
// })

import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App.vue'
// New Imports
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://civil-kid-38.hasura.app/v1/graphql',
  //'http://localhost:3020/graphql',
})

// Create the subscription websocket link
const wsLink = new WebSocketLink({
  uri: 'ws://civil-kid-38.hasura.app/v1/graphql',
  //'ws://localhost:3000/subscriptions',
  options: {
    reconnect: true,
  },
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
      apolloProvider,
      render: function(h) { return h(App)}
  }).$mount('#app')
// Install the vue plugin like before