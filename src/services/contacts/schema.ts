import mongoose from "mongoose"

import { Contact, ContactModel } from "./types"

const { Schema } = mongoose

export const ContactSchema = new Schema<Contact, ContactModel>({
  contactsNumber: { type: String, required: true, unique: true },
  name: String,
  profileImg: String,
  about: String,
})

// export default model<Contact, ContactModel>("contact", ContactSchema)
