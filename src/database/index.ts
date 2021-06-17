import mongoose from "mongoose"

export const connectMongoDB = () => {
  console.log("function called")

  mongoose.connect(process.env.MONGO_CONNECTION!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on("connected", () => {
    console.log("Mongo connection done")
  })
}
