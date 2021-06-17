import dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from "multer"

dotenv.config()

cloudinary.config({
  cloudName: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

const cloudinaryStorage = new CloudinaryStorage({ cloudinary })

export const upload = multer({ storage: cloudinaryStorage }).single("profilePic")
