import { userConstants as Mutations } from "@/store/constants";
import * as API from "@/api/mock";
const user = {
  namespaced: true,
  state: () => ({
    isLoggedIn: false,
    user: {},
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
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
  },
  actions: {
    async setLogin({ commit, email }) {
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
  },
};

export default user;
