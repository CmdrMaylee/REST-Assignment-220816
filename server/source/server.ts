import express from 'express'
import { getAllObjects, getObject, logger, saveObject } from './api.Controller';

const app = express();
app.use(express.json());
app.use(logger)

app.get('/api', getAllObjects);
app.get('/api/:id', getObject);
app.post("/api", saveObject)

app.listen(3000, () => console.log('Running on: http://localhost:3000'));
