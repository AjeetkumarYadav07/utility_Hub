const express = require("express");
const router = express.Router();
const { createLimiter } = require("../middleware/rateLimiter");

const {
  createUrlController,
//   redirectController,
  getRecentUrls,
} = require("../controllers/urlController");

const freeLimiter = createLimiter(5);
router.post("/create", freeLimiter , createUrlController);
router.get("/recent", getRecentUrls);

// // This must be LAST route
// router.get("/u/:shortCode", redirectController);

module.exports = router;