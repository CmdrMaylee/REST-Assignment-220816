import { Pokemon } from "./pokemon.model";


export let pokedex: Array<Pokemon> = [];

export let addPokemon = (pokemon: Pokemon) => pokedex.push(pokemon);

export let jsonToObject = (pokemonJson: string): Pokemon => {
    let result = JSON.parse(pokemonJson)
    return result;
}

export let validate = (json: string) => {

}

export let checkExistingPokemon = (inputId: number) => {
    if (pokedex.find((x => x.id === inputId)) == undefined) return false
    else return true;
}
