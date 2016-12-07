import { addPokemonToIndexedDB, getPokemonsFromIndexedDB, getLatestPokemonSavedFromIndexedDB } from './userStorage';
import { appendPokemons } from './template';

const baseURL = 'http://pokeapi.co/api/v2';
const resourceType = '/pokemon';

export async function getPokemons() {
    const lastIndexSaved = await getLatestPokemonSavedFromIndexedDB();
    const pokemons = await getPokemonsFromIndexedDB();
    if (lastIndexSaved) {
        return appendPokemons(pokemons.slice(Number(lastIndexSaved)));
    }
    return appendPokemons(pokemons);
}

export async function addPokemon()  {
    let index = 1;
    const lastIndexSaved = await getLatestPokemonSavedFromIndexedDB();
    if (lastIndexSaved) {
        index = Number(lastIndexSaved) + 1;
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