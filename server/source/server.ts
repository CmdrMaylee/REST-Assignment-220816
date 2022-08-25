import cors from "cors";
import express from "express";
import { logger } from "./middlewares";
import counterRouter from "./resources/counter/counter.router";
import pokemonRouter from "./resources/pokemon/pokemon.router";
import { loadPokedexFromFile } from "./resources/pokemon/pokemon.utilityFunctions";

const app = express();
app.use(express.json());
app.use(logger);
app.use(cors({ origin: "*" }));

app.use("/api/pokemon", pokemonRouter);
app.use("/api/counter", counterRouter);

loadPokedexFromFile();

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
