<template>
  <section class="row">
    <div class="col-md-4 my-3" :key="library.id" v-for="library in libraries">
      <single-library :library="library"></single-library>
    </div>
  </section>
</template>

<script>
  import { LibraryService } from "../services/LibraryService";
  import SingleLibrary from "./SingleLibrary";
  export default {
    name: "LibraryList",
    data: () => ({
      libraries: [],
    }),
    components: {
      'single-library': SingleLibrary
    },
    firestore: {
      libraries: LibraryService.getAllLibraries()
    },
    methods: {

    }
  }
</script>

<style scoped>
  .row > div {
    min-height: 200px;
  }
</style>
