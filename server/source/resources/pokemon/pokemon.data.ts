import { savePokedexToFile } from "../../middlewares";
import { Pokemon } from "./pokemon.model";
import { isPokemonInPokedex, jsonToObject } from "./pokemon.utilityFunctions";


export let pokedex: Array<Pokemon> = [];

export const returnPokedex = () => { 
    return pokedex;
}

export const pushBundleOfPokemonFromFile = (data: string) => {
    const result = jsonToObject(data);
    if (result.length !< 1) {
        result.forEach(x => {
            console.log(x.name)
            addPokemon(x);
        });
    }
}

export const addPokemon = (pokemon: Pokemon) =>  {
    if (isPokemonInPokedex(pokemon.id) == false) {
        pokedex.push(pokemon);
        savePokedexToFile(pokedex);
        return true;
    } else {
        console.log(`Pokemon with id ${pokemon.id} already exists. Skipping...`)
        return false;
    }
}
