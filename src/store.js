import { reactive } from 'vue'

export const store = reactive({
    selectType: '',
    loading: true,
    AppCardsList: [],
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    //API per tipo
    apiNameParam: '?archetype=Alien'
}); 