import { Application, Request, Response } from "express";

import example from "../../data/example.json";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    return res.status(200).send(example);
  });
};
