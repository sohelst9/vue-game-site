import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Game from "../components/pages/Game.vue";
import Contact from "../components/pages/Contact.vue";
import SingleGame from "@/components/pages/single-game.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/game", component: Game },
  { path: "/contact", component: Contact },
  { path: "/game/:slug", component: SingleGame, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
