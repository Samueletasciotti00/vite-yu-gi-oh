<script>
import { store } from '../store.js'

export default {
    name: 'AppSelect',
    data() {
        return {
            store,
            
        }
    }
}
</script>

<template>

        <!-- Selct input per il filtro cards -->
        <select v-model="store.selectType" @change="$emit('search')" name="ciao" id="selezione">
            <!-- <option value="null">null</option>
            <option value="alien">alien</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> -->
            <option v-for="(typ,index) in store.AppCardsList" :value="store.AppCardsList">{{ store.AppCardsList[index].archetype }}</option>
        </select>
  
</template>

<style lang="scss" scoped>

</style>