import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/auth";

export interface IGetUserAuthInfoRequest extends Request {
  user?: DecodedIdToken;
}
