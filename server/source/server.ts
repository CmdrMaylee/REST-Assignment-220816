import express from 'express'
import { countVisitor, demoPokemon, logger, addPokemon, getPokemonById, getPokedex, welcomeScreen } from './api.Controller';

const app = express();
app.use(express.json());
app.use(logger)

app.get('/api/welcome', welcomeScreen);
app.get('/api/visit', countVisitor)
app.get('/api/:id', getPokemonById);
app.get('/api/:id', getPokedex);
app.post("/api/addPokemon", addPokemon)
app.get('/api/demodata', demoPokemon)

app.listen(3000, () => console.log('Running on: http://localhost:3000'));
