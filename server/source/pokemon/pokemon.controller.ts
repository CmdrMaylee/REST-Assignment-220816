import { Request, Response } from "express";
import { addDemoPokemon } from "./demoData";
import { addPokemon, pokedex } from "./pokemon.data";


export const getPokedex = (req: Request, res: Response) => {
    res.status(200).json(pokedex);
}

export const getPokemonById = (req: Request, res: Response) => {
    console.log(req.params.id);

    res.status(200).json();
}

export const addPokemonJson = (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    addPokemon(req.body);
    res.status(201).json(pokedex);
}

export const alterPokemon = (req: Request, res: Response) => {

}

export const removePokemonById = (req: Request, res: Response) => {

}

export const demoPokemon = (req: Request, res: Response) => {
    console.log('Adding demo data to pokedex...')
    addDemoPokemon();
    console.log("Data added, returning pokedex to json response body...")
    res.status(200).json(pokedex);
}

