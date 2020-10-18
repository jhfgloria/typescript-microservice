import { Request, RequestHandler, Response } from "express"; 

export const helloWorld = (): RequestHandler => {
  return (_req: Request, res: Response): void => {
    res.status(200).json('Hello world');
  }
};

export default {
  helloWorld,
};
