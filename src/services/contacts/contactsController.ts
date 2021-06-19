import { Request, Response, NextFunction } from "express"
import { Contact } from "./types"
import { User } from "../users/types"
import UserModel from "../users/schema"

export const addContact = async (
  req: Request<Pick<User, "userNumber">, {}, Contact>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.params
    const { contactsNumber, contactsName, profileImg, about } = req.body

    const { _id } = await UserModel.findOne({ userNumber: userNumber })

    if (!_id) {
      console.error({ error: "user not found" })
      return res.send({ error: "user not found" })
    }

    const newContact: Contact = {
      contactsNumber,
      contactsName,
      profileImg,
      about,
    }
    // push to users contacts array
    const result = await UserModel.findByIdAndUpdate(
      { _id },
      { $push: { contacts: newContact } },
      { new: true }
    )

    res.send(result)
  } catch (error) {}
}

export const allContacts = async (
  req: Request<Pick<User, "userNumber">, {}, Contact>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.params

    const user = await UserModel.find({ userNumber })

    const contacts = user[0].contacts

    res.send(contacts)
  } catch (error) {
    next(error)
  }
}

export const getContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}

export const updateContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}

export const deleteContact = (req: Request, res: Response) => {
  res.send("Returns one contact")
}
