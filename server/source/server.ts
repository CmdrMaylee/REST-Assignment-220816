import express from 'express';
import { logger } from './middlewares';
import counterRouter from './resources/counter/counter.router';
import pokemonRouter from "./resources/pokemon/pokemon.router";


const app = express();
app.use(express.json());
app.use(logger)

app.use('/api/pokemon', pokemonRouter);
app.use('/api/counter', counterRouter);

app.listen(3000, () => console.log('Running on: http://localhost:3000'));
