import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInput: {
      propertyValue: null,
      ownershipShare: null,
      propertyDept: null,
      commonDebt: null
    }
  },
  mutations: {
    SET_USER_INPUT(state, payload) {
      state.userInput[payload.property] = payload.value;
    }
  },
  actions: {}
});
