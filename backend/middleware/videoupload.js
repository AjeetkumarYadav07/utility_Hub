const multer = require("multer");

const uploadmp4 = multer({
  dest: "uploads/",
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "video/mp4") {
      return cb(new Error("Only MP4 files are allowed"));
    }
    cb(null, true);
  },
});

module.exports = uploadmp4;