import { NextFunction, Request, Response } from "express";
import { pool } from "../../../config/mysql";
import { asyncHandler } from "../../middleware/async";

export const getAllUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await pool.query("SELECT * FROM user");
    res.status(201).json({
      success: true,
      user: user[0],
    });
  }
);
export const getOneUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await pool.query(`SELECT * FROM user WHERE id = ? `, [
      req.params.id,
    ]);
    res.status(201).json({
      success: true,
      user: user[0][0],
    });
  }
);
export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await pool.query(`INSERT INTO user SET ?`, req.body);
    res.status(201).json({
      success: true,
      message: "user created successfully",
    });
  }
);
export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    await pool.query(`UPDATE user SET name = ? WHERE id = ?`, [
      name,
      req.params.id,
    ]);
    res.status(201).json({
      success: true,
      message: `User with the record id ${req.params.id} has been updated`,
    });
  }
);
export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await pool.query(`DELETE * FROM user WHERE id = ? `, [req.params.id]);
    res.status(201).json({
      success: true,
      user: `User with the record id ${req.params.id} has been removed`,
    });
  }
);
