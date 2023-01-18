import { Router } from "express";
import { register } from "../../controllers/firebase_user";
import { getUser } from "../../controllers/user";

const router = Router();

// GET user/docs

router.use("/user", getUser);
router.use("/register", register);

export default router;
