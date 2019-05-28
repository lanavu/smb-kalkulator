import Vue from "vue";
import Router from "vue-router";
import SMB from "./views/SMB";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "SMB",
      component: SMB
    }
  ]
});
