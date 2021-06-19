import { Document, Model } from "mongoose"
import { Message } from "../../typings"

export interface MessageDocument extends Message, Document<string> {}

export interface MessageModel extends Model<MessageDocument> {}
