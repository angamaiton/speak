<template>
  <div class="column">
    <h5 class="title is-5 has-text-centered">{{from}}-{{ to }}</h5>
    <table class="table">
      <tr>
        <th>{{from}}</th>
        <th>{{to}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'vocablist',
  props: ['from', 'to'],
  data() {
    return {
      from: this.from,
      to: this.to,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
