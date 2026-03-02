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


// const uploadmp4 = multer({
//   dest: "uploads/",
//   limits: {
//     fileSize: 100 * 1024 * 1024, // 100MB
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype !== "video/mp4") {
//       return cb(new Error("Only MP4 files are allowed"));
//     }
//     cb(null, true);
//   },
// });

module.exports = upload;

