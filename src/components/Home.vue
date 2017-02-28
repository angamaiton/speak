<template>
  <div class="home">
    <section class="section">
      <h1 class="title">{{ title }}</h1>
      <hr>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
