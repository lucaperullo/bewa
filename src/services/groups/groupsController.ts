import { Request, Response, NextFunction } from "express"
import { ObjectId } from "mongoose"
import { User } from "../users/types"
import UserModel from "../users/schema"
import GroupModel from "./schema"
import { Group } from "./types"

export let addGroup = async (
  req: Request<Pick<User, "userNumber">, {}, Group>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { members, messages } = req.body
    const user = await UserModel.findOne({ userNumber: req.params.userNumber })

    if (!user) {
      console.error("User not found")
      res.send({ error: "User not found" })
    }

    // assemble new group object
    const newGroup: Group = {
      creator: user._id,
      members: members || [], // user/contact numbers used as member identifiers
      messages: messages || [],
    }

    // create group
    const group = new GroupModel(newGroup)
    const result = await group.save()

    members.forEach((member) => {
      //@ts-ignore
      global.activeSockets[member].join(group._id)
    })

    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

export let allGroups = async (
  req: Request<Pick<User, "userNumber">, {}, Group>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.params
    const user = await UserModel.findOne({ userNumber })

    if (!user) {
      console.error("User not found")
      res.send({ error: "User not found" })
    }

    const groups = await GroupModel.find({ members: { $elemMatch: { $eq: userNumber } } }).select(
      "-messages"
    )

    if (!groups) {
      console.warn("Group not found")
      res.send({ warn: "Group not found" })
    }

    res.status(200).send(groups)
  } catch (error) {
    next(error)
  }
}

export let getGroup = async (
  req: Request<Pick<User, "userNumber">, {}, Group>,
  res: Response,
  next: NextFunction
) => {}

export let updateGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}

export let deleteGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}
