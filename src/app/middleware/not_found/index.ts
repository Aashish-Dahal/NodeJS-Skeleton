import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message = "Route not found";

  response.status(404).json({
    message: message,
  });
};
