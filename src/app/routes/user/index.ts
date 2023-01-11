import { Router } from "express";
import { getUser } from "../../controllers/user";

const router = Router();

// GET user/docs

router.use("/user", getUser);

export default router;
