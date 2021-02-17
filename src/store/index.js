import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import cart from "./cart";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart,
    user,
  },
});
