<template>
  <div class="login">
    <section class="section">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <hr>
        <div class="columns">
          <div class="column is-half">
            <label class="label">Username</label>
            <p class="control">
              <input class="input" type="text" placeholder="Username">
            </p>
            <label class="label">Password</label>
            <p class="control">
              <input class="input" type="text" placeholder="Password">
            </p>
            <a class="button is-primary">Log in</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      title: 'Log in',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
