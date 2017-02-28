<template>
  <div class="signup">
    <section class="section">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <div v-if="error">{{ error }}</div>
        <hr>
        <div class="columns">
          <div class="column is-half">
            <label class="label">Username</label>
            <p class="control">
              <input class="input" type="text" placeholder="Enter your username" v-model="credentials.username">
            </p>
            <label class="label">Password</label>
            <p class="control">
              <input class="input" type="password" placeholder="Enter your password" v-model="credentials.password">
            </p>
            <button class="button is-primary" @click="submit()">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import auth from '../auth';

export default {
  name: 'signup',
  data() {
    return {
      title: 'Sign up',
      credentials: {
        username: '',
        password: '',
      },
      error: '',
    };
  },
  methods: {
    submit() {
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password,
      };
      // We need to pass the component's this context
      // to properly make use of http in the auth service
      auth.login(this, credentials, 'secretquote');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
