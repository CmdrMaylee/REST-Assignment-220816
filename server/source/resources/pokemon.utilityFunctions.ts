import fs from "fs";
import { pokedex, Pokemon, pushBundleOfPokemonFromFile } from "./pokemon.model";

const jsonPokedexFileName = "pokedex.json";

export const jsonToSingleObject = (pokemonJson: string) => {
    const result = JSON.parse(pokemonJson);
    return result;
};

export const isPokemonInPokedex = (inputId: number) => {
    if (pokedex.find((x) => x.id === inputId) == undefined) return false;
    else return true;
};

export const returnPokemonById = (id: number) => {
    let result = <Pokemon>{};
    pokedex.forEach(function (x) {
        if (id === x.id) {
            console.log(`${id} matches with ${x.id}`);
            result = x;
        }
        if (result.id !== undefined) return result;
        console.log(`${id} doesn't match ${x.id}`);
    });
    return result;
};

export const savePokedexToFile = (json: object) => {
    const stringified = JSON.stringify(json, null, 2); // The last argument '2' prettifies the json when it's written to the file.
    fs.writeFileSync(jsonPokedexFileName, stringified);
};

export const loadPokedexFromFile = () => {
    console.log("Loading from file...");
    try {
        let data = fs.readFileSync(jsonPokedexFileName, "utf-8").replace(/\s+/g, ""); // The replace bit will trim away -all- whitespace.
        pushBundleOfPokemonFromFile(data);
    } catch {
        console.log("File not located. Collection will be empty.");
    }
};
