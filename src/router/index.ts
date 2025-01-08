import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAppStore } from "../stores/index";
import { nextTick } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/homepage/index.vue"),
    meta: { title: "Code Engineer | Home" },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../pages/projects/index.vue"),
    meta: {
      title: "Code Engineer | Plurk – Projects",
    },
  },
  {
    path: "/portfolios",
    name: "portfolios",
    component: () => import("../pages/portfolio/index.vue"),
    meta: {
      title: "Code Engineer | Portfolios",
    },
  },
  {
    path: "/portfolio/:id",
    name: "portfolio",
    component: () => import("../pages/portfolio/show.vue"),
    meta: {
      title: "Code Engineer | Portfolios Detail",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to) => {
  const store = useAppStore();
  nextTick(() => {
    document.title = (to.meta.title || "Code Engineer") as never;
  });
  store.toggleMainLoader(false);
});

export default router;
