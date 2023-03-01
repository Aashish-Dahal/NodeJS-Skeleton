import { Router } from "express";
import { register } from "../../controllers/firebase_user";
import {
  createUser,
  getAllUser,
  getOneUser,
  updateUser,
} from "../../controllers/user";

const router = Router();

// GET user/docs

router.get("/user", getAllUser);
router.get("/user/:id", getOneUser);
router.post("/user/create", createUser);
router.put("/user/update/:id", updateUser);

router.post("/register", register);

export default router;
