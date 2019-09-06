<template>
  <form @submit.prevent="login">
    <div class="form-group col-6">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group col-6">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password" required>
    </div>
    <div class="col-6">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
  import { UserService } from "./UserService";

  export default {
    name: "Login.vue",
    methods: {
      login(event) {
        const loginData = {
          email: event.target.querySelector('#email').value,
          password: event.target.querySelector('#password').value,
        };

        UserService.login(loginData).then(() => {
          location.href = "/";
        })
      }
    }
  }
</script>

<style scoped>

</style>
