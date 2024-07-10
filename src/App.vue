<script>

// Import Libreria Axios
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppCards from './components/AppCards.vue'
import AppSelect from './components/AppSelect.vue'
//Import store per API di Yu-gi-oh
import { store } from './store.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppCards,
    AppSelect
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards(){
      
      //Variabile
      let baseApi = store.apiURL;

      //Se viene selezionato un valore allora la richiesta API verra filtrata in base al tipo
      if (store.selectType == 'Alien') {
        store.apiURL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien';
        console.log('change to alien');
      }
      
      axios.
          get(store.apiURL)
          .then(res => {
            console.log(res.data.data);
            store.AppCardsList = res.data.data;
          })
          .catch(err => {
            console.log(err);
          })

          console.log('ok')
      }
      
  },
  created(){
    this.getCards();
  } 
}
</script>

<template>
  <!-- Titolo della Web App -->
  <AppHeader message="Yu-gi-oh Api" />

  <!-- Select -->
  <AppSelect @search="getCards"/>
  <!-- Container di cards -->
  <AppCards />
</template>

<style lang="scss">

  // General sass files
  @use './style/general.scss';

  
</style>
