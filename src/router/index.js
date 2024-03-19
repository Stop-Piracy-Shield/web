import Home from "../views/Home.vue";
import Verifica from "../views/Verifica.vue";
import Revoca from "../views/Revoca.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/verifica-email/:token", component: Verifica },
  { path: "/revoca-email/:token", component: Revoca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
