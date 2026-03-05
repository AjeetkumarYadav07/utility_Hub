
const {
  createShortUrl,
  getOriginalUrl,
} = require("../service/url.service");

const Url = require("../models/Url");

// 🔒 Helper Function (keep above controller or move to utils later)
function isValidUrl(url) {
  try {
    const parsed = new URL(url);

    const isHttp =
      parsed.protocol === "http:" ||
      parsed.protocol === "https:";
 
    return isHttp ;
  } catch (err) {
    return false;
  }
}

// CREATE SHORT URL
exports.createUrlController = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    // ✅ Required check
    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        message: "Original URL is required",
      });
    }

    // ✅ URL format validation
    if (!isValidUrl(originalUrl)) {
      return res.status(400).json({
        success: false,
        message: "Invalid or unsafe URL",
      });
    }

    const baseUrl = "http://localhost:5000";

    const newUrl = await createShortUrl(
      originalUrl,
      baseUrl,
      null
    );

    res.status(201).json({
      success: true,
      data: newUrl,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// REDIRECT
exports.redirectController = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const originalUrl = await getOriginalUrl(shortCode);

    if (!originalUrl) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    return res.redirect(originalUrl);

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET USER RECENT URLS
exports.getRecentUrls = async (req, res) => {
  try {
    const urls = await Url.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      data: urls,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};