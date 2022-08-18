import { Pokemon } from "./pokemon.model";


export let pokedex: Array<Pokemon> = [];

export let addPokemon = (pokemon: Pokemon) => pokedex.push(pokemon);