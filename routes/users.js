const express = require("express");
const multer = require("multer");

const Joi = require("joi");
const router = express.Router();

const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");
const imageResize = require("../middleware/imageResize");
const auth = require("../middleware/auth");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
  username: Joi.string().required().min(5),
  phoneNumber: Joi.required(),
  name: Joi.string().required().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
  role: Joi.string().required(),
};

router.post(
  "/",
  [upload.array("image"), validateWith(schema), imageResize],
  (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
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
    } else if (usersStore.getUserUsername(user.username)) {
      return res
        .status(400)
        .send({ error: "A user with the given username already exists." });
    } else {
      usersStore.addUser(user);
      res.status(201).send(user);
    }
  }
);

router.patch("/:id", auth, (req, res) => {
  const data = req.body;
  const userId = parseInt(req.params.id);
  const user = usersStore.updateUser(userId);
  if (data.oldPassword) {
    if (user.password !== data.oldPassword)
      return res.status(400).send({ message: "old password is incorrect" });
    user.oldPassword = data.oldPassword;
    user.password = data.oldPassword;
  } else if (usersStore.getUserByEmail(data.email)) {
    return res
      .status(400)
      .send({ error: "A user with the given email already exists." });
  } else if (usersStore.getUserByPhoneNumber(data.phoneNumber)) {
    return res
      .status(400)
      .send({ error: "A user with the given phone number already exists." });
  } else if (usersStore.getUserUsername(data.username)) {
    return res
      .status(400)
      .send({ error: "A user with the given username already exists." });
  } else if (
    !usersStore.getUserByPhoneNumber(data.phoneNumber) &&
    !usersStore.getUserUsername(data.username) &&
    !usersStore.getUserByEmail(data.email)
  ) {
    user.email = data.email;
    user.name = data.name;
    user.username = data.username;
    user.phoneNumber = data.email;
    if (data.role) user.role = data.role;
    user.updated = Date.now().toLocaleString();
    usersStore.addUser(user);
    res.status(201).send(user);
  }
});

router.get("/", (req, res) => {
  res.send(usersStore.getUsers());
});

module.exports = router;
