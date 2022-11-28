import { Router } from "express";
const registerController = require("../controllers/registerController");

const router: Router = Router();

router.get("/", registerController.handleNewUser);

export default router;
