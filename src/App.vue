<template>
  <div id="app">
    <v-app>
      <v-main>
        <div class="content">
          <Search />
          <SearchResult v-show="$store.state.hits.length > 0" :packs="$store.state.hits" @packClicked="handlePackClick" />
        </div>
      </v-main>
      <v-footer absolute color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
            href="https://github.com/rossifumi46/test_nethernite" target="_blank"
          >
            github
          </v-btn>
          <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
            {{ new Date().getFullYear() }} — <strong>Rustem Sultanov</strong>
          </v-col>
        </v-row>
      </v-footer>
      <Modal v-if="isModalOpen" :onClose="handleClose" :pack="pack" />
    </v-app>
  </div>
</template>

<script>
import SearchResult from "./components/SearchResult";
import Search from "./components/Search.vue";
import Modal from "./components/Modal";
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
    };
  },
  methods: {
    handleClose() {
      this.isModalOpen = false;
    },
    handlePackClick(pack) {
      this.isModalOpen = true;
      this.pack = pack;
    }
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  padding: 0 100px;
}
</style>
