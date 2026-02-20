
const Url  = require("../models/Url");

exports.createShortUrl = async (originalUrl, baseUrl, userId = null) => {
   const { nanoid } = await import("nanoid"); 
  const shortCode = nanoid(7);

  const shortUrl = `${baseUrl}/u/${shortCode}`;

  const newUrl = await Url.create({
    originalUrl,
    shortCode,
    shortUrl,
    user: userId,
  });

  return newUrl;
};

exports.getOriginalUrl = async (shortCode) => {
  const url = await Url.findOne({ shortCode });

  if (!url) return null;

  url.clicks += 1;
  await url.save();

  return url.originalUrl;
};