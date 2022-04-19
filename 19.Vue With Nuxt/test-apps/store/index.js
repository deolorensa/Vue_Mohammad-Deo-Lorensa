import axios from "axios"

export const state = () => ({
    listFilm:[]
})

export const mutations = {
    setListFilm(state, playload) {
        state.listFilm = playload;
    }
}

export const actions = {
    fetchFilm(store, {keyword}){
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=05393432969715caf794d0e7943379f0&query=${keyword}`)
            .then((response) => {store.commit('setListFilm', response.data.results);
          })
        }
}