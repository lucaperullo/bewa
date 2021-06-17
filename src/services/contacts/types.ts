import { Document, Model } from "mongoose"

export interface Contact {
  contactsNumber: string
  name?: string
  profileImg?: string
  about?: string
}

export interface ContactDocument extends Contact, Document {}

export interface ContactModel extends Model<ContactDocument> {}
