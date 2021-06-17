import express, { Request, Response } from "express"
const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  res.send(`
	   <h3>Application is working</h3>
	`)
})

export default router
