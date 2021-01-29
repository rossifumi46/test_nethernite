<template>
  <div class="search">
    <v-text-field
        label="Search for packages"
        hide-details="auto"
        @keyup.enter="onClickSearch"
        v-model="query"
    />
    <v-btn @click="onClickSearch" elevation="2">Поиск</v-btn>
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

<style lang="scss" scope>
.search {
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
}
</style>
