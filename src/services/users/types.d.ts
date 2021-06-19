import { Document, Model, ObjectId } from "mongoose"
import { Contact } from "../contacts/types"

export interface User {
  _id?: string
  userNumber: string
  profileImg?: string
  name?: string
  password?: string
  about?: string
  contacts?: Contact[]
}

export interface UserDocument extends User, Document<string> {}

export interface UserModel extends Model<UserDocument> {}
