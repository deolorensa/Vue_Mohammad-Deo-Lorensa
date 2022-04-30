import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

Vue.config.productionTip = false


const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://civil-kid-38.hasura.app/v1/graphql'
  //'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  render: h => h(App),
})

