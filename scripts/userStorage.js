import localforage from 'localforage';

let lastItemId = null;
const pokedexInstance = localforage.createInstance({
    name: 'pokedex'
})

export function addPokemonToIndexedDB(pokemon) {
    const { id, name, image, weight, height } = pokemon;
    try {
        pokedexInstance.setItem(pokemon.id, {  id, name, image, weight, height } );
    } catch (e) {
        console.error('error saving pokemon to indexedDB:' + e);
    }
}

export async function getLatestPokemonSavedFromIndexedDB() {
    try {
        const keys = await pokedexInstance.keys();
        return keys[keys.length - 1];
    } catch(err) {
        console.error('Error ocurred when fetching latest index saved' + err);
    }
}

async function getPokemonFromIndexedDB(index) {
    try {
        const pokemon = await pokedexInstance.getItem(index);
        return pokemon;
    } catch(err) {
        console.error('Error fetching pokemon from DB' + err);
    }
}

export async function getPokemonsFromIndexedDB() {
    let collection = [];
    const lastIndex = await getLatestPokemonSavedFromIndexedDB();
    for(let i = 1; i <= Number(lastIndex); i++) {
        const pokemon = await getPokemonFromIndexedDB(i);
        collection.push(pokemon); 
    }
    return Promise.all(collection);
}