<template>
  <section class="card">
    <div class="card-header">
      {{library.name}}
    </div>
    <div class="card-body">
        Address: {{library.address}} <br>
        Phone: {{library.phone}}
    </div>
    <div class="card-footer">
      <span>No of books: <span class="badge badge-secondary">{{library.book_count ? library.book_count: '0' }}</span></span>
    </div>
  </section>
</template>

<script>
  export default {
    name: "SingleLibrary",
    props: {
      library: Object
    }
  }
</script>

<style scoped>
  .card {
    min-height: inherit;
  }
  .card-body {
    font-size: 12px;
  }
</style>
