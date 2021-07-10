import Vue from "vue";
import Router from "vue-router";
import First from "./views/first.vue";
import Second from "./views/second.vue";
import Third from "./views/third.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/first",
      name: "first",
      component: First
    },
    {
      path: "/second",
      name: "second",
      component: Second
    },
    {
      path: "/third",
      name: "third",
      component: Third
    }
  ]
});
