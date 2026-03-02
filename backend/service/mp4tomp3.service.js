const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegPath);

const convertMp4ToMp3 = (inputPath, filename) => {
  return new Promise((resolve, reject) => {
    const outputPath = path.join("uploads", `${filename}.mp3`);

    ffmpeg(inputPath)
      .toFormat("mp3")
      .audioBitrate(192)
      .on("end", () => resolve(outputPath))
      .on("error", (err) => reject(err))
      .save(outputPath);
  });
};

module.exports = {
  convertMp4ToMp3,
};