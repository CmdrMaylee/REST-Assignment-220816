import express from 'express';
import { countVisitor } from './counter/counter.controller';
import { logger } from './middlewares';
import { addPokemonJson, demoPokemon, getPokedex, getPokemonById, removePokemonById } from './pokemon/pokemon.controller';


const app = express();
app.use(express.json());
app.use(logger)

app.get('/api/visit', countVisitor)

app.get('/api/:id', getPokedex);
app.get('/api/:id', getPokemonById);
app.post('/api/addpokemon', addPokemonJson)
app.post('/api/removepokemon', removePokemonById)

app.get('/api/demodata', demoPokemon)

app.listen(3000, () => console.log('Running on: http://localhost:3000'));
