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

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign in</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "AppHeader"
  }
</script>

<style scoped>
</style>
