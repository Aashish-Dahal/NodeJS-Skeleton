import { Router } from "express";
import userRoutes from "./user";

const router = Router();

// GET v1/docs

router.use("/auth", userRoutes);

export default router;
