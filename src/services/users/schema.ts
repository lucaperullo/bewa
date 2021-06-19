import mongoose from "mongoose"
import { ContactSchema } from "../contacts/schema"

import { User, UserModel } from "./types"

const { Schema, model } = mongoose

export const UserSchema = new Schema<User, UserModel>({
  userNumber: { type: String, required: true, unique: true },
  password: { type: String, required: false, minlength: 8 },
  name: String,
  profileImg: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  about: String,
  contacts: [ContactSchema],
})

export default model("users", UserSchema)
