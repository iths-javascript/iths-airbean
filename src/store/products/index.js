import { productConstants as Mutations } from "@/store/constants";
import * as API from '@/api/mock'

const products = {
  namespaced: true,
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, products) { 
      state.products = products
    }
  },
  actions: {
    async setProducts({ commit }){
      const menu = await API.fetchProducts()
      commit(Mutations.SET_PRODUCTS, menu)
    }
  },
};

export default products;
