import { Request, Response } from "express";
import { addDemoPokemon } from "./demoData";
import { checkExistingPokemon, returnPokedex, returnPokemonById } from "./pokemon.data";
import { Pokemon } from "./pokemon.model";


export const getPokedex = (req: Request, res: Response) => {
    res.status(200).json(returnPokedex());
}

export const getPokemonById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (checkExistingPokemon(id) == true) {
        const foundPokemon: Pokemon = returnPokemonById(id);
        console.log('Found pokemon: ' + foundPokemon)
        res.status(200).json(foundPokemon);
    }
    else res.status(404).json(`No Pokemon of id value ${id} found`)
}

export const addPokemonJson = (req: Request, res: Response) => {
    
}

export const alterPokemon = (req: Request, res: Response) => {

}

export const removePokemonById = (req: Request, res: Response) => {

}

export const demoPokemon = (req: Request, res: Response) => {
    console.log('Adding demo data to pokedex...');
    addDemoPokemon();
    console.log("Data added, returning pokedex to json response body...");
    res.status(201).json();
}
