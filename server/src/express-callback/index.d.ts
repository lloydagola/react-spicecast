import { Request, Response } from "express";
type TController = (req: Request) => any;
export default function makeExpressCallback(controller: TController): (req: Request, res: Response) => Promise<void>;
export {};
