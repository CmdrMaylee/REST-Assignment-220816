import {
    isPokemonInPokedex,
    jsonToSingleObject,
    savePokedexToFile,
} from "./pokemon.utilityFunctions";

export interface Pokemon {
    id: number;
    name: string;
    type: string;
    discovered: boolean;
}

export let pokedex: Array<Pokemon> = [];

export const returnPokedex = () => {
    return pokedex;
};

export const pushBundleOfPokemonFromFile = (data: string) => {
    console.log("File located. Checking availability and validity...");
    const result = jsonToSingleObject(data);
    if (result.length !== 0) {
        pokedex = result;
    }
};

// Returns true if added, false if not
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

export const replacePokemonInfo = (id: number, pokemon: Pokemon) => {
    pokedex.forEach((x) => {
        if (x.id === id) {
            x.id = pokemon.id;
            x.name = pokemon.name;
            x.type = pokemon.type;
            x.discovered = pokemon.discovered;
            savePokedexToFile(pokedex);
            return;
        }
    });
};

export const removePokemon = (id: number): Pokemon => {
    let deletedPokemonEntryArr: Pokemon[] = [];
    for (let i = 0; i < pokedex.length; i++) {
        if (pokedex[i].id === id) {
            deletedPokemonEntryArr = pokedex.splice(i, 1);
            break;
        }
    }
    const deletedPokemonEntry = deletedPokemonEntryArr[0];
    savePokedexToFile(pokedex);
    return deletedPokemonEntry;
};
