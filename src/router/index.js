import Home from "../views/Home.vue";
import List from "../views/List.vue";
import Verifica from "../views/Verifica.vue";
import Revoca from "../views/Revoca.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/list", component: List },
  { path: "/verifica-email/:token", component: Verifica },
  { path: "/revoca-email/:token", component: Revoca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
