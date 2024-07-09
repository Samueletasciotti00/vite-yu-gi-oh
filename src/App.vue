<script>
import AppHeader from './components/AppHeader.vue'
import AppCards from './components/AppCards.vue'
//Import store per API di Yu-gi-oh
import { store } from './store.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppCards
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <!-- Titolo della Web App -->
  <AppHeader message="Yu-gi-oh Api" />

  <!-- Select -->

  <!-- Container di cards -->
  <AppCards />
</template>

<style lang="scss">

  // General sass files
  @use './style/general.scss';

  
</style>
