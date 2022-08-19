import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, _: Response, next: NextFunction) => {
    console.log('Request type: ' + req.method + ' End-point: ' +  req.path);
    next();
};
