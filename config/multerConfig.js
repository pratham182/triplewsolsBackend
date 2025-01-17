const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinaryConfig");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "social_media_task", 
      allowed_formats: ["jpg", "png", "jpeg"], 
    },
  });

const upload = multer({ storage });

module.exports = upload;