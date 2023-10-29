import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/DetailsView/DetailsView.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/FavoritesView.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
