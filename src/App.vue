<template>
  <main class="container">
    <app-header></app-header>
    <section class="mt-3 red-border">
      <router-view></router-view>
    </section>
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
  .red-border {
    border: solid red 1px;
  }
</style>
