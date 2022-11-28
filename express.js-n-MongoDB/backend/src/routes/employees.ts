import { Router } from "express";
const employeeController = require("../controllers/employeesController");

const router: Router = Router();

router
  .route("/")
  .get(employeeController.getAllemployees)
  .post(employeeController.CreateNewEmployee)
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

router.route("/id").get(employeeController.getEmployee);

export default router;
