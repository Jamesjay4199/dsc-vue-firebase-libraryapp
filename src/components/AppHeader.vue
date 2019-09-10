<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Library App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{name: 'home'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'libraries'}" class="nav-link">Libraries</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'authors'}" >Authors</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'books'}">Books</router-link>
        </li>
      </ul>

      <ul class="navbar-nav" v-if="!isLoggedIn">
        <li class="nav-item">
          <router-link :to="{name: 'register'}" class="nav-link" href="#">Sign up</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'login'}" class="nav-link" href="#">Sign in</router-link>
        </li>
      </ul>

      <div class="dropdown" v-else>
        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ userDetails.displayName}}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" @click.prevent="logout" href="#">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { UserService } from "./services/UserService";
  export default {
    name: "AppHeader",
    data: function() {
      return {
        isLoggedIn: false,
        userDetails: {},
      };
    },
    mounted() {
      UserService.getUserDetails().then(response => {
        this.isLoggedIn = !!response.uid;
        this.userDetails = response;
      });
    },

    methods: {
      logout() {
        UserService.logOut().then(() => {
          location.href = '/';
        })
      }
    }


  }
</script>

<style scoped>
</style>
