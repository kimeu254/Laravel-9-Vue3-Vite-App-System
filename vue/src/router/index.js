import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import Surveys from "../views/Surveys.vue";

const  routes = [
  {
    path: '/',
    redirect: '/home',
    component: DefaultLayout,
    children: [
      {path: '/home', name: 'Home', component: Home},
      {path: '/surveys', name: 'Surveys', component: Surveys}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
