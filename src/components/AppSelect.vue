<script>
import { store } from '../store.js'

export default {
    name: 'AppSelect',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

        <!-- Selct input per il filtro cards -->
        <select v-model="store.selectType[0]" name="ciao" id="">
            <option  value="archetype" @change="$emit('search')">null</option>
            <option  value="null">archetype</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
 
        </select>
  
</template>

<style lang="scss" scoped>

</style>