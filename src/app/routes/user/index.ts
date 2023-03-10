import { Router } from "express";
import { register } from "../../controllers/firebase_user";
import {
  createUser,
  deleteUser,
  getAllUser,
  getOneUser,
  login,
  updateUser,
} from "../../controllers/user";

const router = Router();

// GET user/docs

router.get("/user", getAllUser);
router.get("/user/:id", getOneUser);
router.post("/user/create", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user/login", login);

router.post("/register", register);

export default router;
