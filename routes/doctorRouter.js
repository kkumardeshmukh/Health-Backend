import express from "express";
import { docRegisterController } from "../controller/doctorController.js";

const router = express.Router()

router.post('/register-doctor', docRegisterController)

export default router