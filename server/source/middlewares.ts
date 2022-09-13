import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { Pokemon } from "./resources/pokemon.model";
import { isPokemonInPokedex } from "./resources/pokemon.utilityFunctions";

export const logger = (req: Request, _: Response, next: NextFunction) => {
    console.log(req.method + " " + req.path);
    next();
};

export const validatePokemon = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const joiSchema = Joi.object<Pokemon, true>({
        id: Joi.number(),

        pokeValue: Joi.number().required(),

        name: Joi.string().required(),

        type: Joi.string().required(),

        discovered: Joi.boolean().required(),
    }).options({ abortEarly: false });

    const result = joiSchema.validate(req.body);
    if (!result.error) next();
    else res.status(400).json(result.error.message);
};
