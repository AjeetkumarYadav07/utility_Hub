const rateLimit = require("express-rate-limit");

//  const convertLimiter = createLimiter(40);
// const freeLimiter = createLimiter(20);

const createLimiter = (maxRequests = 10) => {
  return rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: maxRequests,

    keyGenerator: (req) => {
      if (req.user) {
        return `user_${req.user.id}`;
      }
      return `ip_${req.ip}`;
    },

    message: {
      success: false,
      message: "Daily limit reached",
    },
  });
};

module.exports = createLimiter;
