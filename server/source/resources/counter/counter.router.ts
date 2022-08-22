import express from "express";
import { countvisitor, returnVisitorCount } from "./counter.controller";

const counterRouter = express.Router();

// GETs
counterRouter.get("/visitcounter", returnVisitorCount);
counterRouter.get("/visit", countvisitor);

export default counterRouter;
