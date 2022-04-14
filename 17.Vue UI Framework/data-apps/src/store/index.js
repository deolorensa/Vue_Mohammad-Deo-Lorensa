import Vue from "vue";
import Vuex from "vuex"
import axios from "axios"

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const persistedDataState = createPersistedState()

export default new Vuex.Store({
    plugins: [persistedDataState],
    state: {
        newsList: [],
        info: '',
      },
      getters: {
      },
      mutations: {
        setNewsList(state, playload) {
          state.newsList = playload;
        },
        setInfo(state, playload) {
          state.info = playload;
        }
      },
      actions: {
        fetchNews(store, {keyword}){
          axios
              .get("https://newsapi.org/v2/everything?sortBy=popularity&q="+keyword+"&apiKey=6f7f2269e8ab4459b52c2e97f3b04ac5")
              .then((response) => {store.commit('setNewsList', response.data.articles);
            })
              .catch((error) => { store.commit("setInfo", error)
            })
        },
      },
      modules: {
      }
})