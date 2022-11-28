import { Schema, model } from "mongoose";
import { User } from "../interface/User";

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  password: {
    type: String,
    requiredPaths: true,
  },
  refreshToken: String,
});

export default model<User>("User", userSchema);
