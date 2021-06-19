import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server, { allowEIO3: true })

import { Message, OpenChatRequest, User } from "./typings"

//@ts-ignore
global.activeSockets = {
  // "07367329294": socketId
}

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.on("sendMessage", (groupId, message) => {
    // await RoomModel.findByIdAndUpdate
    socket.to(groupId).emit(message)
  })

  // when connected add userNumber: socketId to active socket list
  socket.on("didConnect", (userNumber) => {
    //@ts-ignore
    global.activeSockets[userNumber] = socket
  })

  // join group
  socket.on("joinGroup", (userNumber, groupId) => {
    //@ts-ignore
    global.activeSockets[userNumber].join(groupId)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })
})

export { server, app }
