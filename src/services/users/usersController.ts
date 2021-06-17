import { Request, Response, NextFunction } from "express"
import q2m from "query-to-mongo"
import UserModel from "./schema"
import { User, UserDocument } from "./types"

export let registerUser = async (
  req: Request<{}, {}, Pick<User, "userNumber">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.body
    console.log(userNumber)

    const user = await UserModel.find({ userNumber: userNumber })
    console.log(user)

    if (user.length > 0) {
      console.error("user already exists")
      return res.send({ error: "User already exists" })
    } else {
      const newUser = new UserModel({ userNumber })
      const result = await newUser.save()
  
      res.send(result)
    }

  } catch (error) {
    next(error)
  }
}

export let loginUser = async (
  req: Request<{}, {}, Pick<User, "userNumber">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber } = req.body
    const user = await UserModel.find({ userNumber: userNumber })

    if (!user) return res.send({ error: "User not found" })

    res.send(user[0])
  } catch (error) {
    next(error)
  }
}

export let getUser = async (
  req: Request<{}, {}, Pick<User, "userNumber" | "_id">>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userNumber, _id } = req.query

    //@ts-ignore
    const user = await UserModel.find({ $or: [{ userNumber: userNumber }, { _id: _id }] })

    console.log(user)
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
}

export let allUsers = (req: Request, res: Response) => {
  res.send("Returns all rooms")
}

export let updateUser = async (req: Request<{}, {}, User>, res: Response, next: NextFunction) => {
  try {
    const user = req.body as UserDocument
    const updates = Object.keys(req.body) as (keyof User)[]

    updates.forEach((update) => ((user as any)![update] = req.body[update]))

    user!.profileImg = req.file.path
    await user!.save()
    res.send(user)
  } catch (error) {
    next(error)
  }
}

export let deleteUser = (req: Request, res: Response) => {
  res.send("Returns one room")
}
