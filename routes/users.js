const express = require("express");
const multer = require("multer");

const Joi = require("joi");
const router = express.Router();

const usersStore = require("../store/users");
const validateWith = require("../src/middleware/validation");
const imageResize = require("../src/middleware/imageResize");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
  userName: Joi.string().required().min(5),
  phoneNumber: Joi.required(),
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
  role: Joi.string().required(),
};

router.post(
  "/",
  [upload.array("images"), validateWith(schema), imageResize],
  (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName,
      phoneNumber: req.body.phoneNumber,
      role: req.body.role,
    };
    user.images = req.images.map((fileName) => ({
      fileName: fileName,
    }));
    if (usersStore.getUserByEmail(user.email)) {
      return res
        .status(400)
        .send({ error: "A user with the given email already exists." });
    } else if (usersStore.getUserByPhoneNumber(user.phoneNumber)) {
      return res
        .status(400)
        .send({ error: "A user with the given phone number already exists." });
    } else if (usersStore.getUserUsername(user.userName)) {
      return res
        .status(400)
        .send({ error: "A user with the given username already exists." });
    } else {
      usersStore.addUser(user);
      console.log(user);
      res.status(201).send(user);
    }
  }
);

router.get("/", (req, res) => {
  res.send(usersStore.getUsers());
});

module.exports = router;
