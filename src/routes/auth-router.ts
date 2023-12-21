import authMiddleware from "../middlewares/auth-middleware.js";
import { createUser, getAllUsers, login } from "../controllers/auth-controller.js";
import express from "express";

const authRouter = express.Router();

authRouter.post("/register", createUser);
authRouter.post("/login", login);
authRouter.get("/users", authMiddleware, getAllUsers);

export default authRouter;