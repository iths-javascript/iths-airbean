import { userConstants as Mutations } from "@/store/constants";
import * as API from "@/api/mock";
const user = {
  namespaced: true,
  state: () => ({
    isLoggedIn: false,
    user: {},
    orderHistory: [],
    orderHistoryById: {},
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    getHistory(state) {
      return state.orderHistory;
    },
    getHistoryById(state) {
      return (id) => {
        return state.orderHistoryById[id];
      };
    },
  },
  mutations: {
    [Mutations.SET_LOGIN](state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    [Mutations.SET_LOGOUT](state) {
      state.user = {};
      state.isLoggedIn = false;
    },
    [Mutations.SET_ORDER_HISTORY](state, history) {
      state.orderHistory = history;
      history.forEach((order) => {
        state.orderHistoryById[order.id] = order;
      });
    },
    [Mutations.UPDATE_ORDER_HISTORY](state, order) {
      state.orderHistory.push(order);
      state.orderHistoryById[order.id] = order;
    },
  },
  actions: {
    async setLogin({ commit }, email) {
      try {
        const user = await API.loginUser(email);
        commit(Mutations.SET_LOGIN, user);
      } catch (error) {
        return error.message;
      }
    },
    async setLogout({ commit }) {
      commit(Mutations.SET_LOGOUT);
    },
    async registerUser({ commit }, userData) {
      try {
        const user = await API.registerUser(userData.name, userData.email);
        commit(Mutations.SET_LOGIN, user);
      } catch (error) {
        return error.message;
      }
    },
    async setOrderHistory({ commit, getters }) {
      const userId = getters.getUser.id;
      try {
        const history = await API.fetchOrderHistory(userId);
        commit(Mutations.SET_ORDER_HISTORY, history);
      } catch (error) {
        return error.message;
      }
    },
    async updateOrderHistory({ commit }, order) {
      commit(Mutations.UPDATE_ORDER_HISTORY, order);
    },
  },
};

export default user;
