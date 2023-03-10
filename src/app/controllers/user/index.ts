import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../config/prisma";
import { comparePassword, createPasswordHash } from "../../../utils/constants";
import { asyncHandler } from "../../middleware/async";
import { ErrorResponse } from "../../middleware/error";

export const getAllUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  }
);
export const getOneUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.status(201).json({
      success: true,
      user: user,
    });
  }
);
export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let { name, email, password, avatar } = req.body;
    password = createPasswordHash(password);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        avatar,
      },
    });
    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: user,
    });
  }
);
export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;
    if (!email || !password) {
      {
        return next(
          new ErrorResponse(400, "Please provide an email and password")
        );
      }
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!existingUser) {
      {
        return next(new ErrorResponse(403, "Invalid login credentials."));
      }
    }

    const validPassword = await comparePassword(
      password,
      existingUser.password
    );

    if (!validPassword) {
      return next(new ErrorResponse(403, "Invalid login credentials."));
    }

    res.status(201).json({
      success: true,
      message: "user logged in successfully",
    });
  }
);

export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, avatar } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: {
        name,
        avatar,
      },
    });
    res.status(201).json({
      success: true,
      message: `User with the record id ${req.params.id} has been updated`,
    });
  }
);
export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(201).json({
      success: true,
      user: `User with the record id ${req.params.id} has been removed`,
    });
  }
);
