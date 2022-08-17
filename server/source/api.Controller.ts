import { NextFunction, Request, Response } from "express";

export const getAllObjects = (req: Request, res: Response) => {
    res.status(200).json('Ohoy');
}

export const getObject = (req: Request, res: Response) => {
    console.log(req.params.id);
    res.status(200).json('Ohoy');
}

export const saveObject = (req: Request, res: Response) => {
    const data = req.body;
    console.log(data); // TODO: Save to db or at least generate id and save to server
    res.status(201).json(data);
}

export const logger = (req: Request, _: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
};
