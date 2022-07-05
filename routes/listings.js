const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../store/listings");
const categoriesStore = require("../store/categories");
const validateWith = require("../src/middleware/validation");
const auth = require("../src/middleware/auth");
const imageResize = require("../src/middleware/imageResize");
const delay = require("../src/middleware/delay");
const listingMapper = require("../src/mappers/listings");
const config = require("config");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});
const schema = {
  title: Joi.string().optional(),
  description: Joi.string().allow(""),
  email: Joi.string().email(),
  countryCode: Joi.string().optional(),
  clientPhoneNumber: Joi.number().optional(),
  clientFirstName: Joi.string().optional(),
  clientLastName: Joi.string().optional(),
  clientAddressStreetOne: Joi.string().optional(),
  clientAddressStreetTwo: Joi.string().optional(),
  clientAddressLocality: Joi.string().optional(),
  questionTypePicker_ID: Joi.number().optional().min(1),
  poolType_ID: Joi.number().optional().min(1),
  poolLocation_ID: Joi.number().optional().min(1),
  poolLength: Joi.number().optional(),
  poolWidth: Joi.number().optional(),
  poolDepth: Joi.number().optional(),
  poolPerimeter: Joi.number().optional(),
  copingPerimeter: Joi.number().optional(),
  balanceLength: Joi.number().optional(),
  initialDate: Joi.date().optional(),
  status: Joi.boolean().optional(),
  location: Joi.object({
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
  }).optional(),
};

// const validateCategoryId = (req, res, next) => {
//   if (!categoriesStore.getCategory(parseInt(req.body.categoryId)))
//     return res.status(400).send({ error: "Invalid categoryId." });

//   next();
// };

router.get("/", (req, res) => {
  const listings = store.getListings();
  const resources = listings.map(listingMapper);
  res.send(resources);
});

router.post(
  "/",
  [
    // Order of these middleware matters.
    // "upload" should come before other "validate" because we have to handle
    // multi-part form data. Once the upload middleware from multer applied,
    // request.body will be populated and we can validate it. This means
    // if the request is invalid, we'll end up with one or more image files
    // stored in the uploads folder. We'll need to clean up this folder
    // using a separate process.
    // auth,
    upload.array("images", config.get("maxImageCount")),
    validateWith(schema),
    // validateCategoryId,
    imageResize,
  ],

  async (req, res) => {
    const listing = {
      title: req.body.title,
      email: req.body.email,
      countryCode: req.body.countryCode,
      ClientPhoneNumber: req.body.ClientPhoneNumber,
      clientFirstName: req.body.clientFirstName,
      clientLastName: req.body.clientLastName,
      clientAddressStreetOne: req.body.clientAddressStreetOne,
      clientAddressStreetTwo: req.body.clientAddressStreetTwo,
      clientAddressLocality: req.body.clientAddressLocality,
      questionTypePicker_ID: parseInt(req.body.questionTypePicker_ID),
      poolType_ID: parseInt(req.body.poolType_ID),
      poolLocation_ID: parseInt(req.body.poolLocation_ID),
      poolLength: parseFloat(req.body.poolLength),
      poolWidth: parseFloat(req.body.poolWidth),
      poolDepth: parseFloat(req.body.poolDepth),
      poolPerimeter: parseFloat(req.body.poolPerimeter),
      copingPerimeter: parseFloat(req.body.copingPerimeter),
      balanceLength: parseFloat(req.body.balanceLength),
      description: req.body.description,
      initialDate: req.body.initialDate,
      status: req.body.status,
    };
    listing.images = req.images.map((fileName) => ({ fileName: fileName }));
    if (req.body.location) listing.location = JSON.parse(req.body.location);
    if (req.user) listing.userId = req.user.userId;

    store.addListing(listing);

    res.status(201).send(listing);
  }
);

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(store.getListing(id));
  store.updateList(id, req.body);
  console.log(store.getListing(id));
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  store.deleteList(id);
});
module.exports = router;
