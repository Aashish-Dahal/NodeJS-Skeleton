import { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/auth";
import { auth } from "../../../config/firebase";
import { IGetUserAuthInfoRequest } from "../../../utils/interface";
import { asyncHandler } from "../async";
import { ErrorResponse } from "../error";

export const checkJWT = asyncHandler(
  async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    let headerToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      headerToken = req.headers.authorization.split(" ")[1];
    }
    if (!headerToken) {
      return next(new ErrorResponse(401, "Not authorize to access this route"));
    }
    try {
      const userPayload: DecodedIdToken = await auth.verifyIdToken(headerToken);
      req.user = userPayload;
      next();
    } catch (err) {
      return next(new ErrorResponse(401, "Not authorize to access this route"));
    }
  }
);
