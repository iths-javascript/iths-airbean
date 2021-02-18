import Vue from "vue";
import Vuex from "vuex";
import * as DATA from "../api/mock";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      coffeeMenu: [],
   },
   mutations: {},
   actions: {
      getCoffee(context) {
         DATA.fetchProducts().forEach((r) => context.state.coffeeMenu.push(r));
         console.log(JSON.parse(JSON.stringify(context.state.coffeeMenu)));
      },
   },
});