import { Request, Response, NextFunction } from "express";
import { UserType } from "../../../utils/enums";
import { ErrorResponse } from "../error";

// Grant access to specific roles
export const role = (roles: UserType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(roles)) {
      return next(
        new ErrorResponse(
          403,
          `User role ${roles} is not authorized to access this route`
        )
      );
    }
    next();
  };
};
