import { Request, Response } from "express"; 

export const helloWorld = (_req: Request, res: Response): void => {
  res.status(200).json("Hello world");
};

export default {
  helloWorld,
};
