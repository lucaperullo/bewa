import mongoose from "mongoose"
import { UserSchema } from "../users/schema"
import { MessageSchema } from "../messages/schema"

import { Group, GroupModel } from "./types"

const { Schema, model } = mongoose

export const GroupSchema = new Schema<Group, GroupModel>(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [{ type: String, required: true, unique: true }],
    messages: [MessageSchema],
    groupName: String,
    groupImg: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  { timestamps: true }
)

export default model<Group, GroupModel>("groups", GroupSchema)
