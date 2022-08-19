import Joi from "joi";
import { pokedex } from "./pokemon.data";
import { Pokemon } from "./pokemon.model";

export const jsonToObject = (pokemonJson: string): Pokemon[] => {
    let result = JSON.parse(pokemonJson)
    return result;
}

export const validate = (pokemon: string) => {
    const joiSchema = Joi.object({
        id: Joi.number()
            .required(),

        name: Joi.string()
            .required(),

        type: Joi.string()
            .required()
    }).options({ abortEarly: false })

    return joiSchema.validate(pokemon)
}

export const isPokemonInPokedex = (inputId: number) => {
    if (pokedex.find((x => x.id === inputId)) == undefined) return false
    else return true;
}

export const returnPokemonById = (id: number) => {
    let result: Pokemon;
    pokedex.forEach(function(x) {
        if (id === x.id) {
            console.log(`${id} matches with ${x.id}`)
            result = x;
        }
        if (result !== undefined) return result;
        console.log(`${id} doesn't match ${x.id}`)
    });
    return result;
}
