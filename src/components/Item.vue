<template>
  <div class="item">
    <h3 class="title">{{ pack.name }}</h3>
    <p class="description">{{ pack.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    pack: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang='scss' scoped>
  $primary-color: #333;
  
  .item {
    border: 1px solid #000;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    color: $primary-color;
  }
</style>