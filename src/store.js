import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInputBuyout: {
      propertyValue: null,
      ownershipShare: null,
      propertyDebt: null,
      commonDebt: null,
      ownPropertyDebt: null
    },
    userInputBuyShare: {
      propertyValue: null,
      commonDebt: null,
      ownershipShare: null
    },
    userInputSale: {
      propertyValue: null,
      ownershipShare: null
    }
  },
  mutations: {
    SET_USER_INPUT(state, payload) {
      state.userInputBuyout[payload.property] = payload.value;
    },
    SET_USER_INPUT_BUY_SHARE(state, payload) {
      state.userInputBuyShare[payload.property] = payload.value;
    },
    SET_USER_INPUT_SALE(state, payload) {
      state.userInputSale[payload.property] = payload.value;
    }
  },
  actions: {}
});
