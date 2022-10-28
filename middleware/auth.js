const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  const token = req.header(process.env.headerKey);
  if (!token)
    return res.status(401).send({ error: "Access denied. No token provided." });

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.user = payload;
    if (req.user.role.toLowerCase() === "administrator") {
      next();
    } else {
      return res
        .status(401)
        .send({ error: "Access denied. You must be an admin." });
    }
  } catch (err) {
    res.status(400).send({ error: "Invalid token." });
  }
};
