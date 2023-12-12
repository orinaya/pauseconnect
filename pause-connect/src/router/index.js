import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InfosView from "../views/InfosView.vue";
import QuizView from "../views/QuizView.vue";
import ChallengesView from "../views/ChallengesView.vue";
import HelpView from "../views/HelpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/informations",
      name: "informations",
      component: InfosView,
    },
    {
      path: "/notre-quiz",
      name: "quiz",
      component: QuizView,
    },
    {
      path: "/nos-defis",
      name: "defis",
      component: ChallengesView,
    },
    {
      path: "/aide",
      name: "aide",
      component: HelpView,
    },
  ],
});

export default router;
