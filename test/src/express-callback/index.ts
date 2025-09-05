import { Request, Response } from "express";

type TController = (req: Request) => any;

export default function makeExpressCallback(controller: TController) {
  return async (req: Request, res: Response) => {
    try {
      const data = await controller(req);

      res.type("json");
      res.status(200).send({ data });
    } catch (error: any) {
      res.status(500).send({ message: "An error occurred.", error });
    }
  };
}
