import { Request, Response, NextFunction } from "express"

export let addGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}

export let getGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}

export let allGroups = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns all rooms")
}

export let updateGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}

export let deleteGroup = (req: Request, res: Response, next: NextFunction) => {
  res.send("Returns one room")
}
