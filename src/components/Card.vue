<script>
export default {
    name: 'Card',
    props: ['info']
}
</script>

<template>

   <!-- Elemento singolo da esporare in AppCards -->

        <!-- Immagine elemento -->
        <img :src="info.ygoprodeck_url" alt="">

        <h4>Name of card</h4>
        <div>Type</div>
  
</template>

<style lang="scss" scoped>
    img{
        width: 150px;
    }
</style>