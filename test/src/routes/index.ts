import express, { Request, Response } from "express";

import { Express } from "express-serve-static-core";
import productRoutes from "./product.routes";
import sessionRoutes from "./session.routes";
import userRoutes from "./user.routes";

function routes(app: Express): void {}

export default routes;
