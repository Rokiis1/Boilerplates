import { Router } from "express";
const authController = require("../controllers/authController");

const router: Router = Router();

router.post("/", authController.handleLogin);

export default router;
