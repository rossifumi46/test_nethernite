<template>
  <div class="search">
    <input @keyup.enter="onClickSearch" type="text" v-model="query" />
    <button @click="onClickSearch">Поиск</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    onClickSearch() {
      const params = {
        query: this.query
      };
      this.$store.dispatch("search", params);
    }
  }
};
</script>

<style lang="scss" scope></style>
