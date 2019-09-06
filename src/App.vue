<template>
  <main class="container">
    <app-header></app-header>
    <section class="mt-3">
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

</style>
