import express from "express";
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
pokemonRouter.post("/addpokemon", addPokemonJson);
pokemonRouter.post("/demo", demoPokemon);

// PUTs
pokemonRouter.put("/:id", alterPokemonById);

// DELETEs
pokemonRouter.delete("/:id", removePokemonById);

export default pokemonRouter;
