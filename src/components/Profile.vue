<template>
  <div class="languages">
    <section class="section">
      <h1 class="title">{{ title }}</h1>
      <hr>
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <p class="menu-label">Indo-European</p>
            <p class="menu-label">Altaic</p>
            <p class="menu-label">Sino-Tibetan</p>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import auth from '../auth';

export default {
  name: 'languages',
  data() {
    return {
      title: 'Languages',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
