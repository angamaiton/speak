<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item" exact><img src="../assets/logo.png"></router-link>
        <router-link to="languages" class="nav-item is-tab dropdown-toggle">
          Languages
        </router-link>
        <router-link to="vocab" class="nav-item is-tab">Vocab</router-link>
        <router-link to="translate" class="nav-item is-tab">Translate</router-link>
      </div>
      <div class="nav-right">
        <router-link to="login" class="nav-item is-tab">Log in</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'navbar',
  data() {
    return {
      title: 'Speak',
    };
  },
};
</script>

<style scoped>
  .dropdown {
    box-shadow: 0 0 8px #777;
    display: none;
    left: 0;
    position: absolute;
    top: 100%;
    z-index: 1000;
  }
</style>
