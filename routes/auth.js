const express = require("express");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

const router = express.Router();
const KEY = process.env.JWT_KEY || config.get("JWT_KEY");
const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
};

router.post("/", validateWith(schema), async (req, res) => {
  const { email, password } = req.body;
  const user = await usersStore.getUserByEmail(email, true);
  if (!user || user.password !== password)
    return res.status(400).send({ error: "Invalid email or password." });

  const token = jwt.sign(
    {
      userId: user._id,
      name: user.name,
      username: user.username,
      countryCode: user.countryCode,
      phoneNumber: user.phoneNumber,
      role: user.role,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      createdAt: user.createdAt,
      image: user.image,
    },
    KEY
  );
  res.send(token);
});

module.exports = router;
