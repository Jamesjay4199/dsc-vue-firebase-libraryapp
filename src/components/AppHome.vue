<template>
  <main class="jumbotron">
    <h1 class="display-4">Hello, there!</h1>
    <p class="lead">
      Welcome to this Library App built with Vue Js and Firebase.
      You can create libraries, create books, add books to library, etc.
    </p>
    <hr class="my-4">
    <div class="text-center" v-if="!isLoggedIn">
      <p>
        But first, you have to sign up.
      </p>
      <router-link class="btn btn-primary btn-lg" :to="{name: 'register'}" role="button">Sign up</router-link>
    </div>
    <div class="text-center" v-else>
      <p>
        <strong>Hi {{ userDetails.displayName }}!</strong>
        Welcome to the Library app.
      </p>
      <p>
        You can navigate your way through using the navigation bar.
      </p>
    </div>
  </main>
</template>

<script>
  import { UserService } from "./services/UserService";

  export default {
    name: "AppHome",
    data() {
      return {
        isLoggedIn: false,
        userDetails: {}
      }
    },
    mounted() {
      UserService.getUserDetails().then(response => {
        this.isLoggedIn = !!response.uid;
        this.userDetails = response;
      });
    }
  }
</script>

<style scoped>

</style>
