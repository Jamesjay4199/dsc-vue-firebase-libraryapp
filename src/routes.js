import VueRouter from "vue-router";
import AppHome from "./components/AppHome";
import LibraryList from "./components/library/LibraryList";
import BookList from "./components/books/BookList";
import AuthorList from "./components/author/AuthorList";

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
    path: '/',
    redirect: '/home'
  }
];

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});
