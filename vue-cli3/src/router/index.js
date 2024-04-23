import { createRouter, createWebHistory } from "vue-router";
import MyMain from "../views/MyMain.vue";
import ListStudents from "@/views/ListStudents.vue";
import AddStudent from "@/views/AddStudent.vue";
import EditStudent from "@/views/EditStudent.vue";
// import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MyMain,
    meta: {
      title: "Example1",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "Example2",
    },
    children: [
      {
        name: "ListStudents",
        path: "list-students",
        component: ListStudents,
      },
      {
        name: "AddStudent",
        path: "add-student",
        component: AddStudent,
      },
      {
        name: "EditStudent",
        path: "edit-student",
        component: EditStudent,
      },
    ],
  },
  // {
  //   path: "/eded",
  //   name: "EdEd",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/EdEd.vue"),
  //   meta: {
  //     title: "Example3",
  //   },
  // },
  {
    path: "/:pathMath(.*)*",
    name: "not_found",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
