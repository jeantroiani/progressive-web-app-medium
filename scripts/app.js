import { getPokemons } from './pokemonService';

window.app = {
    addPokemon: getPokemons,
}

getPokemons();