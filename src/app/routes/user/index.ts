import { Router } from "express";
import { getFirebaseUser, register } from "../../controllers/user";

const router = Router();

// GET user/docs

router.post("/register", register);
router.get("/user", getFirebaseUser);

export default router;
