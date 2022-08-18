import { Request, Response } from "Express";
import { incrementCounter, visitorCount } from "./counter.data";

export const returnVisitorCount = (req: Request, res: Response) => {
    const data = req.body;
    console.log(`Total amount of visitors is currently ${visitorCount}`)
    res.status(200).json(`Visitors: ${visitorCount}`);
}

export const countvisitor = (req: Request, res: Response) => {
    incrementCounter();
    console.log("Visitor registered")
    console.log(`Total amount of visitors is currently ${visitorCount}`)
    res.status(200).json(`Visitor registered, current visitors: ${visitorCount}`);
}
