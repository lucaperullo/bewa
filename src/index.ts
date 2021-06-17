import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import listEndpoints from "express-list-endpoints"
import cookieParser from "cookie-parser"

import homeRoute from "./services/home/homeRoute"
import routes from "./routes"

import { badRequestHandler } from "./middleware"
import { connectMongoDB } from "./database"

import { server, app } from "./server"

// Instantiate
process.env.NODE_ENV !== "production" && dotenv.config()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/", homeRoute)
app.use("/api", routes)

// Errors
app.use(badRequestHandler)

// start server
server.listen(port, () => {
  connectMongoDB()
  console.table(listEndpoints(app))
  console.log("Server up and running on port: ", port)
})
