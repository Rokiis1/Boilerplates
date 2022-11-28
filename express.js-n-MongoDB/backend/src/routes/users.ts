import { Router } from "express";
const usersController = require("../controllers/usersController");

const router: Router = Router();

router
  .route("/")
  .get(usersController.getAllUsers)
  .delete(usersController.deleteUser);

router.route("/:id").get(usersController.getUser);

export default router;
