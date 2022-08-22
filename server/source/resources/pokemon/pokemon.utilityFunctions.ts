import Joi from "joi";
import { pokedex } from "./pokemon.data";
import { Pokemon } from "./pokemon.model";

export const jsonToSingleObject = (pokemonJson: string) => {
    const result = JSON.parse(pokemonJson);
    return result;
};

export const validatePokemon = (pokemon: string) => {
    const joiSchema = Joi.object({
        id: Joi.number().required(),

        name: Joi.string().required(),

        type: Joi.string().required(),
    }).options({ abortEarly: false });

    return joiSchema.validate(pokemon);
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

export const replacePokemonInfo = (id: number, pokemon: Pokemon) => {
    pokedex.forEach((x) => {
        if (x.id === id) {
            x.id = pokemon.id;
            x.name = pokemon.name;
            x.type = pokemon.type;
            return;
        }
    });
};
