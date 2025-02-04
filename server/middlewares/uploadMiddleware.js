const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Save images in the 'uploads' folder
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);
  
    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed!"));
    }
};


const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit: 5MB
    fileFilter,
});

module.exports = upload;