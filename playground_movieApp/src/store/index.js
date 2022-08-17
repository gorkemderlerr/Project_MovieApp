import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favMovies: [],
  },
  mutations: {
    ADD_FAV_MOVIE(state, payload) {
      // mutate state
      state.favMovies.push(payload.movie);
    },
  },
  actions: {},
  modules: {},
});

// import { createStore } from "vuex";

// const store = createStore({
//   state: {
//     favMovies: [],
//   },
//   getters: {
//     totalFavMovies(state) {
//       return state.favMovies.length;
//     },
//   },
//   mutations: {
//     SAVE_FAV_MOVIE(state, title) {
//       state.favMovies.push(title);
//     },
//   },
//   actions: {
//     saveFavMovie({ commit }, title) {
//       commit("SAVE_FAV_MOVIE", title);
//     },
//   },
// });

// export default store;
