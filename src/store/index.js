import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newu: [],
    page: 1
  },

  mutations: {
    sub1(state, { payload }) {
      state.newu.push(payload);
    },
    
  },

  actions: {
    sub1({ commit }, payload) {
      commit("sub1", { payload });
    },
  },

  getters: {
    newu: state => state.newu
  }
});