import VueRouter from "vue-router";
import AppHome from "./components/AppHome";
import LibraryList from "./components/library/LibraryList";
import BookList from "./components/books/BookList";
import AuthorList from "./components/author/AuthorList";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: AppHome
  },
  {
    path: '/libraries',
    name: 'libraries',
    component: LibraryList
  },
  {
    path: '/books',
    name: 'books',
    component: BookList
  },
  {
    path: '/authors',
    name: 'authors',
    component: AuthorList
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Signup
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login
  },

  {
    path: '/',
    redirect: '/home'
  }
];

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});
