import { Router } from "express";
const logoutController = require("../controllers/logoutController");

const router: Router = Router();

router.get("/", logoutController.handleLogout);

export default router;
