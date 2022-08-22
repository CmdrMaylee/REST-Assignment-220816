import { Request, Response } from "express";
import { addPokemon, returnPokedex } from "./pokemon.data";
import { addDemoPokemon } from "./pokemon.demoData";
import { Pokemon } from "./pokemon.model";
import {
    isPokemonInPokedex,
    jsonToSingleObject,
    replacePokemonInfo,
    returnPokemonById,
    validatePokemon,
} from "./pokemon.utilityFunctions";

export const getPokedex = (_: Request, res: Response) => {
    res.status(200).json(returnPokedex());
};

export const getPokemonById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json("Value provided must be of numerical value");
    } else if (isPokemonInPokedex(id) == true) {
        const foundPokemon = returnPokemonById(id);
        res.status(200).json(foundPokemon);
    } else res.status(404).json(`No Pokemon of id value ${id} found`);
};

export const addPokemonJson = (req: Request, res: Response) => {
    const validity = validatePokemon(req.body);
    if (validity.error !== undefined) {
        res.status(400).json(validity.error.message);
    } else {
        const stringified = JSON.stringify(req.body);
        const pokemonObjectToAdd: Pokemon = jsonToSingleObject(stringified);
        const wasPokemonAdded = addPokemon(pokemonObjectToAdd);
        console.log(wasPokemonAdded);
        if (wasPokemonAdded == true) res.status(201).json();
        else res.status(303).json(`Pokemon of set ID(${pokemonObjectToAdd.id}) already exists`);
    }
};

export const alterPokemon = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const validity = validatePokemon(req.body);
    const pokemonExists = isPokemonInPokedex(id);
    if (isNaN(id)) res.status(400).json("Value provided must be of numerical value");
    else if (validity.error !== undefined) res.status(400).json(validity.error.message);
    else if (pokemonExists == false) res.status(404).json(`No Pokemon of id value ${id} found`);
    else {
        const stringified = JSON.stringify(req.body);
        const pokemonObject = jsonToSingleObject(stringified);
        replacePokemonInfo(id, pokemonObject);
        res.status(200).json(pokemonObject);
    }
};

export const removePokemonById = (req: Request, res: Response) => {};

export const demoPokemon = (req: Request, res: Response) => {
    console.log("Adding demo data to pokedex...");
    const addedPokemon = addDemoPokemon();
    console.log(
        "Operation finished. Successfull additions to pokedex reported in json response body..."
    );
    res.status(201).json(addedPokemon);
};
