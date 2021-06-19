import { Socket as SocketIO } from "socket.io"

declare global {
  module NodeJS {
    interface Global {
      activeSockets: Record<any, any>
    }
  }
}
