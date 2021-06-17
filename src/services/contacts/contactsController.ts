import { Request, Response, NextFunction } from "express"
import q2m from "query-to-mongo"
import createError from "http-errors"
import { Contact } from "./types"
import { User } from "../users/types"
import UserModel from "../users/schema"

export const addContact = async (
  req: Request<
    Pick<User, "userNumber">, // this is the req.params
    {},
    Pick<Contact, "contactsNumber" | "name" | "profileImg" | "about"> // this is the req.body
  >,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.params
    const { contactsNumber, name, profileImg, about } = req.body

    const { _id } = await UserModel.findOne({ userNumber: userNumber })

    if (!_id) {
      console.error({ error: "user not found" })
      return res.send({ error: "user not found" })
    }

    const newContact: Contact = {
      contactsNumber,
      name: name,
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
  req: Request<Pick<User, "userNumber">, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.params
    const { contacts } = await UserModel.findOne({ userNumber: userNumber })

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
