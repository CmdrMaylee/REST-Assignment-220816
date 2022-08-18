import { Request, Response } from "Express";
import { incrementCounter, visitorCount } from "./counter.data";

export const countVisitor = (req: Request, res: Response) => {
    const data = req.body;
    incrementCounter();
    console.log("Visitor registered")
    console.log(`Total amount of visitors is currently ${visitorCount}`)
    res.status(200).json(data);
}
