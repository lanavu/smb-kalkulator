import Vue from "vue";
import Router from "vue-router";
import Buyout from "./views/Buyout";
import BuyShare from "./views/BuyShare";
import Sale from "./views/Sale";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Buyout",
      component: Buyout
    },
    {
      path: "/buy-share",
      name: "BuyShare",
      component: BuyShare
    },
    {
      path: "/sale",
      name: "Sale",
      component: Sale
    }
  ]
});
