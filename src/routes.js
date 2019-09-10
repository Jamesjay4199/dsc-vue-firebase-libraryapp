import VueRouter from "vue-router";
import AppHome from "./components/AppHome";
import LibraryList from "./components/library/LibraryList";
import LibraryPage from "./components/library/LibraryPage";
import BookList from "./components/books/BookList";
import AuthorList from "./components/author/AuthorList";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import NewLibrary from "./components/library/NewLibrary";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: AppHome
  },
  {
    path: '/libraries',
    component: LibraryPage,
    children: [
      {
        component: LibraryList,
        name: 'libraries',
        path: '/'
      },
      {
        component: NewLibrary,
        name: 'newLibrary',
        path: 'add'
      }
    ]
  },
  {
    component: BookList,
    name: 'books',
    path: '/books'
  },
  {
    component: AuthorList,
    name: 'authors',
    path: '/authors'
  },
  {
    component: Signup,
    name: 'register',
    path: '/auth/register'
  },
  {
    component: Login,
    name: 'login',
    path: '/auth/login'
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
