import { reactive } from 'vue'

export const store = reactive({
    selectType: [
        'archetype'
    ],
    loading: true,
    AppCardsList: [],
    apiURL:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    apiNamePar: 'archetype'
}); 