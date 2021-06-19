import mongoose from "mongoose"
import { UserSchema } from "../users/schema"
import { MessageModel } from "./types"
import { Message } from "../../typings"

const { Schema } = mongoose

export const MessageSchema = new Schema<Message, MessageModel>(
  {
    sender: {
      userNumber: { type: Number, required: true },
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    },
    text: { type: String, required: true },
  },
  { timestamps: true }
)
