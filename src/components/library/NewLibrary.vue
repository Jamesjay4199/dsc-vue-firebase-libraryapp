<template>
  <section class="row">
    <form @submit.prevent="createLibrary" class="col-md-6">
      <h2 class="col-12">Create a new Library</h2>
      <div class="form-group row">
        <label for="name" class="col-sm-2">Name:</label>
        <div class="col-sm-10">
          <input type="text" id="name" v-model="library.name" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="address" class="col-sm-2">Address</label>
        <div class="col-sm-10">
          <input type="text" id="address" v-model="library.address" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-2">Phone</label>
        <div class="col-sm-10">
          <input type="text" id="phone" v-model="library.phone" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-secondary" v-if="!isSaving" type="submit">Save</button>
        <button class="btn btn-default" v-else type="button">Loading...</button>
      </div>
    </form>

    <section class="col-md-6">
      <h2>Preview</h2>
      <single-library :library="library"></single-library>
    </section>
  </section>
</template>

<script>
  import SingleLibrary from "./SingleLibrary";
  import { UserService } from "../services/UserService";
  import { LibraryService } from "../services/LibraryService";

  export default {
    name: "NewLibrary",
    data: () => ({
      library: {
        address: '',
        name: '',
        phone: '',
        book_count: 0
      },
      isSaving: false
    }),
    components: {
      'single-library': SingleLibrary
    },

    methods: {
      createLibrary() {
        const data = {...this.library};
        const requiredFields = ['name', 'address', 'phone'];
        let hasIncompleteFields = false;
        requiredFields.forEach(field => {
          if (!data[field]) {
            hasIncompleteFields = true;
          }
        });
        if (hasIncompleteFields) {
          alert('Some fields are missing');
          return;
        }
        UserService.getUserDetails().then(details => {
          this.library.uid = details.uid;
        }).then(() => {
          this.isSaving = true;
          LibraryService.createLibrary(data)
          // eslint-disable-next-line no-unused-vars
        }).then(response => {
          this.isSaving = false;
          this.$router.push('/libraries');
        }).catch(err => {
          alert(err.message)
        });
      }
    }
  }
</script>

<style scoped>

</style>
