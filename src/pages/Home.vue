<template>
  <div class="home">
    <section class="section">
      <h1 class="title is-3">{{ title }}</h1>
      <hr>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="title">What's new?</p>
            <p class="subtitle">Here's what's been going on since you last logged on.</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-4">
          <article class="tile is-child notification is-warning">
            <p class="title">What's new?</p>
            <p class="subtitle">Here's what's been going on since you last logged on.</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Welcome back, Kjartan!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
