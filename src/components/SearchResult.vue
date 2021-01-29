<template>
  <div class="table">
    <h2>Packages number:{{ $store.state.total }}</h2>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="pack in packs"
            :pack="pack"
            :key="pack.id"
            @click="$emit('packClicked', pack)"
          >
            <td>{{ pack.name }}</td>
            <td>{{ pack.description }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div v-show="packs.length > 0" class="pages">
      <v-btn @click="handleClick(minus)">prev</v-btn>
      <v-btn @click="handleClick(plus)">next</v-btn>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  data() {
    return {
      plus: 1,
      minus: -1,
      page: 1
    };
  },
  props: {
    packs: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick(nextPage) {
      const params = {
        query: this.$store.state.query,
        page:
          this.$store.state.page >= 0 &&
          this.$store.state.page < this.$store.state.pages
            ? this.$store.state.page + nextPage
            : this.$store.state.page
      };
      this.$store.dispatch("search", params);
    }
  }
};
</script>

<style lang="scss">
.pages {
  padding: 10px;
}
</style>
