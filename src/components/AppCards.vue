<script>
import Card from './Card.vue'

//Import store per API di Yu-gi-oh
import { store } from '../store.js'

export default {
    name: 'AppCards',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <!-- Bootstrap For Container of Cards -->
    <div class="container">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div v-for="card in store.AppCardsList" :key="card.id">

                <!-- Componente del singolo elemento -->
                <Card :info="card" />
            </div>
            
        </div>
    </div>
   
  
</template>

<style lang="scss" scoped>

</style>