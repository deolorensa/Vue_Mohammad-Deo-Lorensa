import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsList: [],
    info: '',
  },
  getters: {
  },
  mutations: {
    setNewsList(state, param) {
      state.newsList = param;
    },
    setInfo(state, param) {
      state.info = param;
    }
  },
  actions: {
    fetchNews(store){
      axios
          .get('https://newsapi.org/v2/everything?q=tesla&from=2022-03-07&sortBy=publishedAt&apiKey=fb2d9c0307bc40cf8233f4cee65c9734')
          .then((response) => {store.commit('setNewsList', response.data.articles);
        })
          .catch((error) => { store.commit("setInfo", error)
        })
    },
  },
  modules: {
  }
})
