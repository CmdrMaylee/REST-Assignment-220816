import express from 'express';
import { logger } from './middlewares';
import counterRouter from './resources/counter/counter.router';
import pokemonRouter from "./resources/pokemon/pokemon.router";


const app = express();
app.use(express.json());
app.use(logger)

app.use('/api/pokemon', pokemonRouter);
app.use('/api/counter', counterRouter);

/* app.get('/api/visit', countVisitor)

app.get('/api/:id', getPokedex);
app.get('/api/:id', getPokemonById);
app.post('/api/addpokemon', addPokemonJson)
app.post('/api/removepokemon', removePokemonById)

app.get('/api/demodata', demoPokemon) */

app.listen(3000, () => console.log('Running on: http://localhost:3000'));
