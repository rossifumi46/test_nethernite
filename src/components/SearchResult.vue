<template>
  <div class="list">
    <Item
      v-for="pack in packs"
      :pack="pack"
      :key="pack.id"
      @click.native="$emit('packClicked', pack)"
    />
    <div v-show="packs.length > 0" class="pages">
      <button class="prev" @click="handleClick(minus)">prev</button>
      <button class="next" @click="handleClick(plus)">next</button>
    </div>
  </div>
</template>

<script>
import Item from './Item';
export default {
  name: 'SearchResult',
  components: { Item },
  data() {
    return {
      plus: 1,
      minus: -1
    }
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
          this.$store.state.page >= 0 && this.$store.state.page < this.$store.state.pages
          ? this.$store.state.page + nextPage
          : this.$store.state.page,
      };
      this.$store.dispatch('search', params);
    }
  }
};
</script>

<style>

</style>