import Vue from "vue";
import Vuex from "vuex";
import * as DATA from "../api/mock";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      coffeeMenu: [],
      loader: false,
      users: [],
      order: [],
   },
   mutations: {
      register(state, query) {
         let user = new Object();
         user.name = query.name;
         user.email = query.email;
         setTimeout(() => {
            user.id = Date.now();
            state.users.push(user);
            localStorage.setItem("users", JSON.stringify(state.users));
         }, 100);
      },
      makeOrderCoffee(state, index) {
         let order = new Object();
         order.name = state.coffeeMenu[index].title;
         order.price = state.coffeeMenu[index].price;
         order.total = 1;
         order.basePrice = state.coffeeMenu[index].price;
         state.order.push(order);
      },
      increaseOrder(state, index) {
         state.order[index].total++;
         state.order[index].price = state.order[index].basePrice * state.order[index].total;
      },
   },
   actions: {
      getCoffee({ state }) {
         state.coffeeMenu = [];
         DATA.fetchProducts().forEach((r) => state.coffeeMenu.push(r));
         console.log(JSON.parse(JSON.stringify(state.coffeeMenu)));
      },
      register({ commit }, query) {
         // DATA.registerUser(query.name, query.email);
         commit("register", query);
      },
      orderCoffee({ commit }, index) {
         commit("makeOrderCoffee", index);
      },
      increaseOrder({ commit }, index) {
         commit("increaseOrder", index);
      },
   },
   getters: {
      order(state) {
         let uniq = {};
         let filterArr = state.order.filter((obj) => !uniq[obj.name] && (uniq[obj.name] = true));
         return filterArr;
      },
   },
});
