import Joi from "joi";
import { Pokemon } from "./pokemon.model";


export let pokedex: Array<Pokemon> = [];

export const returnPokedex = () => { 
    return pokedex;
}

export const addPokemon = (pokemon: Pokemon) =>  {
    if (isPokemonInPokedex(pokemon.id) == false) {
        pokedex.push(pokemon);
        return true;
    } else {
        console.log(`Pokemon with id ${pokemon.id} already exists. Skipping...`)
        return false;
    }
}

export const jsonToObject = (pokemonJson: string): Pokemon => {
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
    let result;
    pokedex.forEach(function(x) {
        if (id === x.id) {
            console.log(`${id} matches with ${x.id}`)
            result = x;
        }
        console.log(`${id} doesn't match ${x.id}`)
    });
    return result;
}
