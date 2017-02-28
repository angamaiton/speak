<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        {{msg}}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    padding: 0.5rem 1.5rem 6rem;
  }
</style>
