import { NextFunction, Request, Response } from "express";
import { addPokemon, incrementCounter, pokedex, visitorCount } from "./data";
import { addDemoPokemon } from "./demoData";


export const welcomeScreen = (req: Request, res: Response) => {
    res.status(200).json('Welcome!')
}

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

export const demoPokemon = (req: Request, res: Response) => {
    console.log('Adding demo data to pokedex...')
    addDemoPokemon();
    console.log("Data added, returning pokedex to json response body...")
    res.status(200).json(pokedex);
}

export const countVisitor = (req: Request, res: Response) => {
    const data = req.body;
    incrementCounter();
    console.log("Visitor registered")
    console.log(`Total amount of visitors is currently ${ visitorCount }`)
    res.status(200).json(data);
}

export const logger = (req: Request, _: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
};
