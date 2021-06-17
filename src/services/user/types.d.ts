import { Document, Model } from "mongoose";
 
interface BasicUserInfo {
  _id?: string
  phoneNumber: string
  profileImg?: string
  name?: string
}

export interface User extends BasicUserInfo {
  password: string
  about?: string
  contacts?: Contact[]
}

export interface Contact extends BasicUserInfo {
  nickname?: string
}

export interface UserDocument extends User, Document<string>{}

export interface UserModel extends Model<UserDocument> {}

