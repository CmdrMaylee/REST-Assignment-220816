import { Request, Response } from "express";
import { returnPokedex } from "./pokemon.data";
import { addDemoPokemon } from "./pokemon.demoData";
import { Pokemon } from "./pokemon.model";
import {
  isPokemonInPokedex,
  jsonToObject,
  returnPokemonById,
  validate,
} from "./pokemon.utilityFunctions";

export const getPokedex = (_: Request, res: Response) => {
  res.status(200).json(returnPokedex());
};

export const getPokemonById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isPokemonInPokedex(id) == true) {
    const foundPokemon = returnPokemonById(id);
    res.status(200).json(foundPokemon);
  } else res.status(404).json(`No Pokemon of id value ${id} found`);
};

export const addPokemonJson = (req: Request, res: Response) => {
  const validity = validate(req.body);
  if (validity.error == undefined) {
    const result: Pokemon[] = jsonToObject(req.body);

    result.forEach((x) => {
      console.log(x.name);
      // addPokemon(x)
    });
  }
};

export const alterPokemon = (req: Request, res: Response) => {};

export const removePokemonById = (req: Request, res: Response) => {};

export const demoPokemon = (req: Request, res: Response) => {
  console.log("Adding demo data to pokedex...");
  const addedPokemon = addDemoPokemon();
  console.log(
    "Operation finished. Successfull additions to pokedex reported in json response body..."
  );
  res.status(201).json(addedPokemon);
};
