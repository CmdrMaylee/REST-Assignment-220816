import { Request, Response } from "express";
import { addDemoPokemon } from "./pokemon.demoData";
import {
    addPokemon,
    Pokemon,
    removePokemon,
    replacePokemonInfo,
    returnPokedex,
} from "./pokemon.model";
import {
    isPokemonInPokedex,
    jsonToSingleObject,
    returnPokemonById,
} from "./pokemon.utilityFunctions";

export const getPokedex = (_: Request, res: Response) => {
    const pokedex = returnPokedex();
    if (pokedex.length === 0) res.status(404).json("The Pokedex is currently empty");
    else res.status(200).json(returnPokedex());
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

export const addPokemonJson = (req: Request<{}, {}, Pokemon>, res: Response) => {
    const stringified = JSON.stringify(req.body);
    const pokemonObjectToAdd: Pokemon = jsonToSingleObject(stringified);
    const wasPokemonAdded = addPokemon(pokemonObjectToAdd);
    console.log(wasPokemonAdded);
    if (wasPokemonAdded == true)
        res.status(201).json(pokemonObjectToAdd.name + " added successfully!");
    else res.status(303).json(`Pokemon of set ID(${pokemonObjectToAdd.id}) already exists`);
};

export const alterPokemonById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const pokemonToChangeExists = isPokemonInPokedex(id);
    if (isNaN(id)) res.status(400).json("Value provided must be of numerical value");
    else if (pokemonToChangeExists == false)
        res.status(404).json(`No Pokemon of id value ${id} found`);
    else {
        const stringified = JSON.stringify(req.body);
        const pokemonObject = jsonToSingleObject(stringified);
        const pokemonWithNewIdExists = isPokemonInPokedex(pokemonObject.id);
        if (pokemonWithNewIdExists) {
            res.status(400).json(`A pokemon with the id ${pokemonObject.id} already exists`);
        } else {
            replacePokemonInfo(id, pokemonObject);
            res.status(200).json(pokemonObject.name + " successfully edited");
        }
    }
};

export const removePokemonById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const pokemonExists = isPokemonInPokedex(id);
    if (isNaN(id)) res.status(400).json("Value provided must be of numerical value");
    else if (pokemonExists == false) res.status(404).json(`No Pokemon of id value ${id} found`);
    else {
        removePokemon(id);
        res.status(200).json(`Entry of id ${id} successfully deleted`);
    }
};

export const demoPokemon = (req: Request, res: Response) => {
    console.log("Adding demo data to pokedex...");
    let addedPokemon = addDemoPokemon();
    console.log(
        "Operation finished. Successfull additions to pokedex reported in json response body..."
    );
    if (addedPokemon.length === 0) res.status(201).json("Demo pokemon is already in storage");
    else res.status(201).json(addedPokemon.length + " Pokemon added");
};