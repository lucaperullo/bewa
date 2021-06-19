import { Document, Model, ObjectId } from "mongoose"
import { User } from "../users/types"
import { Message } from "../../typings"

export interface Group {
  creator: string
  members?: string[]
  messages?: Message[]
}

export interface GroupDocument extends Group, Document<string> {}

export interface GroupModel extends Model<GroupDocument> {}
