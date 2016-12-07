import { addPokemonToIndexedDB, getPokemonsFromIndexedDB, getLatestPokemonSavedFromIndexedDB } from './userStorage';
import { appendPokemons } from './template';

const baseURL = 'http://pokeapi.co/api/v2';
const resourceType = '/pokemon';

export async function getPokemons() {
    const lastIndexSaved = await getLatestPokemonSavedFromIndexedDB();
    const pokemons = await getPokemonsFromIndexedDB();
    if (lastIndexSaved) {
            console.log(pokemons.splice(pokemons[lastIndexSaved]));
            appendPokemons(pokemons.splice(pokemons[lastIndexSaved]));
    }
}

export async function addPokemon()  {
    const lastIndexSaved = await getLatestPokemonSavedFromIndexedDB();
    let index = Number(lastIndexSaved) + 1;
    if (!lastIndexSaved) {
        index = 1;
    }
    fetch(baseURL + resourceType + "/" + index)
    .then(data => {
        return data.json();
    })
    .then(data => {
        addPokemonToIndexedDB(data)
        getPokemons();
    })
}