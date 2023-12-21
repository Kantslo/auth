import { Schema, model } from "mongoose"
import { UserType } from "types"
import {v4 as uuid} from "uuid";
const { String } = Schema.Types

const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    default: uuid,
  }
});

const User = model("User", userSchema);

export default User;