import express from "express";
import { validatePokemon } from "../../middlewares";
import {
    addPokemonJson,
    alterPokemonById,
    demoPokemon,
    getPokedex,
    getPokemonById,
    removePokemonById,
} from "./pokemon.controller";

const pokemonRouter = express.Router();

// GETs
pokemonRouter.get("/", getPokedex);
pokemonRouter.get("/:id", getPokemonById);

// POSTs
pokemonRouter.post("/", validatePokemon, addPokemonJson);
pokemonRouter.post("/demo", demoPokemon);

// PUTs
pokemonRouter.put("/:id", validatePokemon, alterPokemonById);

// DELETEs
pokemonRouter.delete("/:id", validatePokemon, removePokemonById);

export default pokemonRouter;
