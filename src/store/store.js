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
});
