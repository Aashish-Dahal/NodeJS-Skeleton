import { NextFunction, Request, Response } from "express";
import { UserRecord } from "firebase-admin/auth";
import { auth } from "../../../config/firebase";
import { IGetUserAuthInfoRequest } from "../../../utils/interface";
import { asyncHandler } from "../../middleware/async";
export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, fullName, photoURL } = req.body;

    const user = await auth.createUser({
      displayName: fullName,
      email: email,
      emailVerified: false,
      photoURL: photoURL,
      password: password,
      disabled: true,
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: user.providerData[0],
    });
  }
);
export const getFirebaseUser = asyncHandler(
  async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const users: UserRecord = await auth.getUserByEmail(req.user?.email!);
    res.status(200).json({
      success: true,
      user: users.providerData[0],
    });
  }
);
