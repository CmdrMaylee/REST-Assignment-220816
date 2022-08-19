import { NextFunction, Request, Response } from "express";
import fs from 'fs';

export const logger = (req: Request, _: Response, next: NextFunction) => {
    console.log('Request type: ' + req.method + ' End-point: ' +  req.path);
    next();
};

export const savePokemonToFile = (json: string) => {
    const stringified = JSON.stringify(json);
    fs.writeFileSync('pokedex.json', stringified)
}
