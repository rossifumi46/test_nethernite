import algoliasearch from 'algoliasearch';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const api = ({ query, page }) => {
  const client = algoliasearch(
    'OFCNCOG2CU',
    'f54e21fa3a2a0160595bb058179bfb1e'
  );
  const index = client.initIndex('npm-search');
  return index.search(query, {
    hitsPerPage: 10,
    page
  });
}

export default new Vuex.Store({
  state: {
    hits: [],
    nbPages: 0,
    query: '',
    page: 0
  },
  getters: {
    // GET_SEARCH_RESULTS: (state) => {
    //   return state.searchResult;
    // }
  },
  mutations: {
    SET_SEARCH_RESULTS(state, { hits, nbPages, query, page }) {
      state.hits = hits;
      state.pages = nbPages;
      state.query = query;
      state.page = page;
    }
  },
  actions: {
    search({ commit }, payload) {
      api(payload)
        .then((res) => {
          const { hits, nbPages, query, page } = res;
          commit('SET_SEARCH_RESULTS', { hits, nbPages, query, page });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
