import { Request, Response } from "express";
import { returnPokedex } from "./pokemon.data";
import { addDemoPokemon } from "./pokemon.demoData";
import { isPokemonInPokedex, returnPokemonById, validate } from "./pokemon.utilityFunctions";


export const getPokedex = (_: Request, res: Response) => {
    res.status(200).json(returnPokedex());
}

export const getPokemonById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (isPokemonInPokedex(id) == true) {
        const foundPokemon = returnPokemonById(id);
        console.log('Found pokemon: ' + foundPokemon)
        res.status(200).json(foundPokemon);
    }
    else res.status(404).json(`No Pokemon of id value ${id} found`)
}

export const addPokemonJson = (req: Request, res: Response) => {
    const result = validate(req.body)
    if (result.error == undefined) {
        
    }
}

export const alterPokemon = (req: Request, res: Response) => {

}

export const removePokemonById = (req: Request, res: Response) => {

}

export const demoPokemon = (req: Request, res: Response) => {
    console.log('Adding demo data to pokedex...');
    const addedPokemon = addDemoPokemon();
    console.log("Operation finished. Successfull additions to pokedexreported in json response body...");
    res.status(201).json(addedPokemon);
}
