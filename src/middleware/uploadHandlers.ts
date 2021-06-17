import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import dotenv from "dotenv"

import multer from "multer"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const cloudinaryStorage = new CloudinaryStorage({ cloudinary })

export const uploadProfileImg = multer({ storage: cloudinaryStorage }).single("profileImg")
