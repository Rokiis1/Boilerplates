import { Router } from "express";
const refreshTokenController = require("../controllers/refreshTokenController");

const router: Router = Router();

router.get("/", refreshTokenController.handleRefreshToken);

export default router;
