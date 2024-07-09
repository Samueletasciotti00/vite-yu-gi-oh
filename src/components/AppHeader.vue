<script>
    export default {
        name: 'App',
        props: ['message']
    }
</script>

<template>

    <!-- Bootstrap Titol of App -->
   <div class="container-fluid text-secondary bg-white">
        <div class="row-12">
            <div class="col-12"><h1><img src="https://1000logos.net/wp-content/uploads/2024/02/Yu-Gi-Oh-Logo-2001.png" alt="">{{ message }}</h1></div>
        </div>
   </div>
  
</template>

<style lang="scss" scoped>

    // Immage logo settings
    h1>img{
        width: 100px;
    }
</style>
