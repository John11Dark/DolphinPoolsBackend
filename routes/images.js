const express = require("express");
const router = express.Router();
const Joi = require("joi");

const auth = require("../middleware/auth");
const store = require("../store/images");

router.get("/", auth, (req, res) => {
  const images = store.getImages();
  res.status(201).send(images);
});

const multer = require("multer");
const imageResize = require("../middleware/imageResize");
const config = require("config");
const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

router.post(
  "/",
  [auth, upload.array("images", config.get("maxImageCount")), imageResize],
  async (req, res) => {
    const { image } = req.body;

    store.addImage(image);
    res.status(201).send();
  }
);

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  imagesStore.deleteImage(id);
  res.status(201).send();
});

module.exports = router;
