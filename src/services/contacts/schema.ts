import mongoose from "mongoose"

import { Contact, ContactModel } from "./types"

const { Schema } = mongoose

export const ContactSchema = new Schema<Contact, ContactModel>({
  contactsNumber: { type: String, required: true, unique: true },
  name: String,
  profileImg: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  about: String,
})

// export default model<Contact, ContactModel>("contact", ContactSchema)
