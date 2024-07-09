<script>
import Card from './Card.vue'

export default {
    name: 'AppCards',
    components: {
        Card
    }
}
</script>

<template>

    <!-- Bootstrap For Container of Cards -->
    <div class="container">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="">

                <!-- Componente del singolo elemento -->
                <Card />
            </div>
            <div class="">

                <!-- Componente del singolo elemento -->
                <Card />
            </div>

            <div class="">

                <!-- Componente del singolo elemento -->
                <Card />
            </div>

            <div class="">

                <!-- Componente del singolo elemento -->
                <Card />
            </div>

            <div class="">

                <!-- Componente del singolo elemento -->
                <Card />
            </div>
        </div>
    </div>
   
  
</template>

<style lang="scss" scoped>

</style>