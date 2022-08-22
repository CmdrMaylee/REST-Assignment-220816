import { savePokedexToFile } from "../../middlewares";
import { Pokemon } from "./pokemon.model";
import { isPokemonInPokedex, jsonToObject } from "./pokemon.utilityFunctions";

export let pokedex: Array<Pokemon> = [];

export const returnPokedex = () => {
  return pokedex;
};

export const pushBundleOfPokemonFromFile = (data: string) => {
  console.log("File located. Checking availability and validity...");
  const result = jsonToObject(data);
  if (result.length !== 0) {
    pokedex = result;
  }
};

export const addPokemon = (pokemon: Pokemon) => {
  if (isPokemonInPokedex(pokemon.id) == false) {
    pokedex.push(pokemon);
    savePokedexToFile(pokedex);
    return true;
  } else {
    console.log(`Pokemon with id ${pokemon.id} already exists. Skipping...`);
    return false;
  }
};
