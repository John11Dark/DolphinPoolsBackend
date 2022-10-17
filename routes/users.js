// ? * -->
const express = require("express");
const multer = require("multer");
const Joi = require("joi");
/// * -->
const router = express.Router();
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const imageResize = require("../middleware/imageResize");
const auth = require("../middleware/auth");

// ? * --> Variables
const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
  username: Joi.string().required().min(5),
  countryCode: Joi.string().min(4).max(4),
  phoneNumber: Joi.string().required().min(8).max(8),
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
  role: Joi.string().required(),
  dateOfBirth: Joi.date(),
  gender: Joi.boolean(),
  address: Joi.object(),
  flag: Joi.string(),
};

// ? * --> Routers

/// *-->// Create new single user router
router.post(
  "/",
  [upload.array("image"), validateWith(schema), imageResize],
  async (req, res) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        countryCode: req.body?.countryCode,
        phoneNumber: req.body.phoneNumber,
        role: req.body?.role,
        gender: req.body?.gender,
        dateOfBirth: req.body?.dateOfBirth,
        address: req.body?.address,
        image:
          req.body?.image != null
            ? req.body.image
            : [{ fileName: `${req.body.gender ? "male" : "female"}Avatar` }],
      };
      const emailExists = await usersStore.getUserByEmail(user.email);
      const userNameExists = await usersStore.getUserUsername(user.username);
      const phoneNumberExists = await usersStore.getUserByPhoneNumber(
        user.phoneNumber
      );

      if (userNameExists)
        return res
          .status(400)
          .send({ error: "A user with the given username already exists." });
      if (phoneNumberExists)
        return res.status(400).send({
          error: "A user with the given phone number already exists.",
        });
      if (emailExists)
        return res
          .status(400)
          .send({ error: "A user with the given email already exists." });
      const storedUser = await usersStore.addUser(user);
      res.status(201).send(storedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "unknown error occurred" });
    }
  }
);

/// *-->// Get * users router
router.get("/", async (_, res) => {
  const users = await usersStore.getUsers();
  res.status(201).send(users);
});

/// *-->// Get * users with specific Query router
router.get("/details", async (_, res) => {
  const users = await usersStore.getUsersDetails();
  res.status(201).send(users);
});

module.exports = router;
