import { addPokemonToIndexedDB, getPokemonsFromIndexedDB, getLatestPokemonSavedFromIndexedDB } from './userStorage';
import { appendPokemons } from './template';

const baseURL = 'http://pokeapi.co/api/v2';
const resourceType = '/pokemon';

export async function getPokemons(position = 1) {
    const pokemons = await getLatestPokemonSavedFromIndexedDB();
    if (!lastIndexSaved) {
        return [];
    }
    appendpokemons(pokemons);
}

export async function addPokemon()  {
    const lastIndexSaved = await getLatestPokemonSavedFromIndexedDB();
    const index = lastIndexSaved + 1;
    fetch(baseURL + resourceType + "/" + index)
    .then(data => {
        return data.json();
    })
    .then(data => {
        addPokemonToIndexedDB(data)
        console.log(data.name);
    })
}