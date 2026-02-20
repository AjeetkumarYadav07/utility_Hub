
const {getUser} = require("../service/auth");

module.exports = function (req, res, next) {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ message: "Unauthorized" });

  const user = getUser(token);

  if (!user)
    return res.status(401).json({ message: "Invalid Token" });

  req.user = user;
  next();
};
