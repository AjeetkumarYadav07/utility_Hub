const rateLimit = require("express-rate-limit");
const { ipKeyGenerator } = require("express-rate-limit");

const createLimiter = (limit) => {
  return rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: limit,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => ipKeyGenerator(req.ip),
    message: {
      success: false,
      message: "Daily limit reached",
    },
  });
};

module.exports = { createLimiter };
