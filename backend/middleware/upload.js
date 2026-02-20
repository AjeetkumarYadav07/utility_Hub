const multer = require("multer");

const storage = multer.memoryStorage();

const upload = (allowedTypes, maxSizeMB = 10) => {
  return multer({
    storage,
    limits: {
      fileSize: maxSizeMB * 1024 * 1024, //10 mb limit
    },
    fileFilter: (req, file, cb) => {
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Invalid file type"));
      }
    },
  });
};

module.exports = upload;
