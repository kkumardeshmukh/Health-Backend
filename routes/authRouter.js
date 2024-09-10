import express from "express";
import { registerController } from "../controller/authController.js";

const router = express.Router()

router.post('/register-user', registerController)

export default router