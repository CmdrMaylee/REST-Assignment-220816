import express from "express";
import { loadPokedexFromFile, logger } from "./middlewares";
import counterRouter from "./resources/counter/counter.router";
import pokemonRouter from "./resources/pokemon/pokemon.router";

var cors = require("cors");

const app = express();
app.use(express.json());
app.use(logger);
app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.use("/api/pokemon", pokemonRouter);
app.use("/api/counter", counterRouter);

loadPokedexFromFile();

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
