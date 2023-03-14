import Vue from "vue";
import App from "./App.vue";
//Import the store created
import { store } from "./store/store.js";

new Vue({
  //The datastore we want to use is the store that was created

  store: store,
  render: (h) => h(App),
}).$mount("#app");
