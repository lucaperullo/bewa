import { Document, Model } from "mongoose"

export interface Contact {
  contactsNumber: string
  contactsName: string
  profileImg?: string
  about?: string
}

export interface ContactDocument extends Contact, Document {}

export interface ContactModel extends Model<ContactDocument> {}
