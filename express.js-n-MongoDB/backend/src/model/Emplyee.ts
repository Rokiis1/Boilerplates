import { Schema, model } from "mongoose";
import { Employee } from "../interface/Emplyee";

const employeeSchema = new Schema<Employee>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

export default model<Employee>("Employee", employeeSchema);
