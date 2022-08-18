import express from "express";
import { addPokemonJson, alterPokemon, getPokedex, getPokemonById, removePokemonById } from "./pokemon.controller";

const pokemonRouter = express.Router();
pokemonRouter.get('/', getPokedex);
pokemonRouter.get('/:id', getPokemonById);

pokemonRouter.post('/', addPokemonJson);

pokemonRouter.put('/', alterPokemon);

pokemonRouter.delete('/:id', removePokemonById)