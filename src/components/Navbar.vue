<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="nav-item is-tab" exact>{{title}}</router-link>
        <router-link to="about" class="nav-item is-tab">About</router-link>
        <router-link to="hello" class="nav-item is-tab">Test</router-link>
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
