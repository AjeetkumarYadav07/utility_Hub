const fs = require("fs");
const { convertMp4ToMp3 } = require("../service/mp4tomp3.service");

const convertFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const inputPath = req.file.path;
    const filename = req.file.filename;

    const outputPath = await convertMp4ToMp3(inputPath, filename);

    res.download(outputPath, "converted.mp3", () => {
      // Clean up files
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Conversion failed" });
  }
};

module.exports = {
  convertFile,
};