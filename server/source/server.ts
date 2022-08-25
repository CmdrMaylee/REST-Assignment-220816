import cors from "cors";
import express from "express";
import { logger } from "./middlewares";
import pokemonRouter from "./resources/pokemon.router";
import { loadPokedexFromFile } from "./resources/pokemon.utilityFunctions";

const app = express();
app.use(express.json());
app.use(logger);
app.use(cors({ origin: "*" }));

app.use("/api/pokemon", pokemonRouter);

loadPokedexFromFile();

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
