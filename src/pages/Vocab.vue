<template>
  <div class="vocab">
    <section class="section">
      <nav class="level">
        <div class="level-left">
          <h1 class="title">{{ title }}</h1>
        </div>
        <div class="level-right">
          <a class="button is-primary">Add Language</a>
        </div>
      </nav>
      <hr>
      <div class="columns">
        <VocabList from="English" to="French" />
        <VocabList from="English" to="German" />
        <VocabList from="English" to="Spanish" />
      </div>
    </section>
  </div>
</template>

<script>
import VocabList from '../components/VocabList';

export default {
  name: 'vocab',
  components: {
    VocabList,
  },
  data() {
    return {
      title: 'Vocabulary',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
