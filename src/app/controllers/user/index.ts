import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../../middleware/async";

export const getUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      user: "user data",
    });
  }
);
