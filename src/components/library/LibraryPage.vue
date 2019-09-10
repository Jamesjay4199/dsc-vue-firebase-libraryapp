<template>
  <main>
    <h1>Libraries</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{name: 'libraries'}" class="nav-link active" href="">View all</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'newLibrary'}" class="nav-link" href="">Add</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
  export default {
    name: "LibraryList",
  }
</script>

<style scoped></style>
