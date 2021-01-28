<template>
  <div id="app">
    <Search />
    <SearchResult :packs="$store.state.hits" @packClicked="handlePackClick"/>
    <Modal v-if="isModalOpen" :onClose="handleClose" :pack="pack"/>
  </div>
</template>

<script>
import SearchResult from './components/SearchResult';
import Search from './components/Search.vue';
import Modal from './components/Modal';
export default {
  components: {
    Search,
    SearchResult,
    Modal
  },
  data() {
    return {
      isModalOpen: false,
      pack: {}
    }
  },
  methods: {
    handleClose() {
      this.isModalOpen = false;
    },
    handlePackClick(pack) {
      this.isModalOpen = true;
      this.pack = pack;
      console.log(pack)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
