<script>
export default {
    name: 'Card',
    props: ['info']
}
</script>

<template>

   <!-- Elemento singolo da esporare in AppCards -->

        <!-- Immagine elemento -->
        <img :src="info.card_images[0].image_url" alt="">

        <h4>{{info.name}}</h4>
        <div>{{ info.archetype }}</div>
  
</template>

<style lang="scss" scoped>
    img{
        width: 150px;
    }
</style>