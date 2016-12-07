import { getPokemons, addPokemon } from './pokemonService';

window.app = {
    addPokemon: addPokemon,
}

getPokemons();