import { NextFunction, Request, Response } from "express";
import fs from 'fs';
import { pushBundleOfPokemonFromFile } from "./resources/pokemon/pokemon.data";

const jsonPokedexFileName = 'pokedex.json'

export const logger = (req: Request, _: Response, next: NextFunction) => {
    console.log('Request type: ' + req.method + ' End-point: ' +  req.path);
    next();
};

export const savePokedexToFile = (json:object) => {
    const stringified = JSON.stringify(json, null, 2);
    fs.writeFileSync(jsonPokedexFileName, stringified)
}

export const loadPokedexFromFile = () => {
    const data = fs.readFileSync(jsonPokedexFileName, 'utf-8');
    if (data !== '') pushBundleOfPokemonFromFile(data)
}
