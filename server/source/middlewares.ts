import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { pushBundleOfPokemonFromFile } from "./resources/pokemon/pokemon.data";

const jsonPokedexFileName = "pokedex.json";

export const logger = (req: Request, _: Response, next: NextFunction) => {
  console.log("Request type: " + req.method + " End-point: " + req.path);
  next();
};

export const savePokedexToFile = (json: object) => {
  const stringified = JSON.stringify(json, null, 2); // The last argument '2' prettifies the json when it's written to the file.
  fs.writeFileSync(jsonPokedexFileName, stringified);
};

export const loadPokedexFromFile = () => {
  console.log("Loading from file...");
  let data = fs.readFileSync(jsonPokedexFileName, "utf-8").replace(/\s+/g, ""); // The replace bit will trim away -all- whitespace.
  if (data !== "") pushBundleOfPokemonFromFile(data);
};
