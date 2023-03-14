import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//Creating the central store to use accross multiple components
export const store = new Vuex.Store({
  state: {
    products: [
      {
        name: "Banana Skin",
        price: 20,
      },
      {
        name: "Shiny star",
        price: 50,
      },
      {
        name: "Green star",
        price: 100,
      },
      {
        name: "Cheese man",
        price: 1000,
      },
    ],
    items: [
      {
        name: "Banana",
        price: 1,
      },
      {
        name: "Banana",
        price: 1,
      },
      {
        name: "Banana",
        price: 1,
      },
      {
        name: "Banana",
        price: 1,
      },
    ],
  },
  //Getter functions for getting data from the store to be used accross multiple components
  //Define in the store so we only have to change it here rather than in all components
  getters: {
    saleProducts: (state) => {
      const saleProducts = state.products.map((product) => {
        return {
          name: `** ${product.name} **`,
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  //Better to use mutations when changing data as it can be tracked with Vue developer tools. Better for debugging.
  //Don't use mutations with asynchronous code
  mutations: {
    reducePrice: (state, amount) => {
      state.products.forEach((product) => {
        product.price -= amount;
      });
    },
  },
  //Actions are good when wanting to use asynchronous code with a mutation
  //Context in this reference is basically state
  //Try to use them even when not using asynch code
  actions: {
    reducePrice: (context, amount) => {
      setTimeout(function () {
        context.commit("reducePrice", amount);
      }, 2000);
    },
  },
});
