// Third parties libraries
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

// custom libraries
const store = require("../store/listings");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const delay = require("../middleware/delay");
const listingMapper = require("../mappers/listings");
const config = require("config");

const upload = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 },
});

// validation schema
const schema = {
  clientAddressStreetOne: Joi.string().optional(),
  clientAddressStreetTwo: Joi.optional(),
  clientAddressLocality: Joi.string().required(),
  location: Joi.object({
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
  }).optional(),
  clientPhoneNumber: Joi.required(),
  countryCode: Joi.string().optional(),
  clientFirstName: Joi.string().required(),
  clientLastName: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  email: Joi.string().email(),
  title: Joi.string().required(),
  status: Joi.optional(),
  initialDate: Joi.date().required(),
  // pool pickers
  projectType: Joi.required(),
  poolType_ID: Joi.required(),
  poolLocation_ID: Joi.required(),
  indoor: Joi.required(),
  mosaicOrTile: Joi.required(),
  poolSteps: Joi.required(),
  poolLeaking: Joi.required(),
  options: Joi.object().optional({
    item: Joi.object({
      label: Joi.string(),
      value: Joi.number(),
    }),
  }),
  packages: Joi.object().optional({
    item: Joi.object({
      label: Joi.string().optional(),
      value: Joi.number().optional(),
    }),
  }),
  // pool parameters
  poolLength: Joi.required(),
  poolWidth: Joi.required(),
  poolPerimeter: Joi.required(),
  copingPerimeter: Joi.required(),
  poolDepthEnd: Joi.required(),
  poolDepthStart: Joi.required(),
  balanceLength: Joi.required(),
  balanceTankWidth: Joi.required(),
  balanceTankDepth: Joi.required(),
  balanceTankPipe: Joi.required(),
  poolVolume: Joi.required(),
  // optional futures
  numberOfWallInlets: Joi.optional(),
  numberOfSkimmers: Joi.optional(),
  numberOfSumps: Joi.optional(),
  numberOfLights: Joi.optional(),
  spaJets: Joi.optional(),
  counterCurrent: Joi.optional(),
  vacuumPoints: Joi.optional(),
  finalPrice: Joi.optional(),
  user: Joi.object({
    name: Joi.required(),
    id: Joi.required(),
    image: Joi.required(),
  }).required(),
};

// get all listings
router.get("/", (req, res) => {
  const listings = store.getListings();
  const resources = listings.map(listingMapper);
  res.status(201).send(resources);
});

// create new listing
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
    imageResize,
  ],

  async (req, res) => {
    const data = req.body;
    const listing = {
      title: data.title,
      email: data.email,
      countryCode: data.countryCode ? data.countryCode : "+356",
      ClientPhoneNumber: data.clientPhoneNumber,
      clientFirstName: data.clientFirstName,
      clientLastName: data.clientLastName,
      clientAddressStreetOne: data.clientAddressStreetOne,
      clientAddressLocality: data.clientAddressLocality,
      projectType: parseInt(data.projectType),
      poolType_ID: parseInt(data.poolType_ID),
      poolLocation_ID: parseInt(data.poolLocation_ID),
      poolLeaking: data.poolLeaking,
      poolSteps: data.poolSteps,
      indoor: data.Indoor,
      mosaicOrTileBorder: data.mosaicOrTileBorder,
      description: data.description,
      initialDate: data.initialDate,
      status: data.status,
      user: JSON.parse(data.user),
      location: JSON.parse(data.location),
      // pool parameters
      poolLength: data.poolLength,
      poolWidth: data.poolWidth,
      poolPerimeter: data.poolPerimeter,
      copingPerimeter: data.copingPerimeter,
      poolDepthEnd: data.poolDepthEnd,
      poolDepthStart: data.poolDepthStart,
      balanceLength: data.balanceLength,
      balanceTankWidth: data.balanceTankWidth,
      balanceTankDepth: data.balanceTankDepth,
      balanceTankPipe: data.balanceTankPipe,
      poolVolume: data.poolVolume,
      // options
      numberOfWallInlets: data.numberOfWallInlets,
      numberOfSkimmers: data.numberOfSkimmers,
      numberOfSumps: data.numberOfSumps,
      numberOfLights: data.numberOfLights,
      spaJets: data.spaJets,
      counterCurrent: data.counterCurrent,
      vacuumPoints: data.vacuumPoints,
    };
    listing.images = req.images.map((fileName) => ({ fileName: fileName }));
    if (data.options) listing.options = data.options;
    if (data.finalPrice) listing.finalPrice = data.finalPrice;
    if (data.clientAddressStreetTwo)
      listing.clientAddressStreetTwo = data.clientAddressStreetTwo;
    store.addListing(listing);
    res.status(201).send(listing);
  }
);

// update a list
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  store.updateList(id, req.body);
});

// delete a list
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  store.deleteList(id);
  return res.status(201).send();
});

// restore a deleted list
router.patch("/recycleBin/:id", auth, (req, res) => {
  const id = parseInt(req.params.id);
  store.restoreListing(id);
  return res.status(201).send();
});

// get archived listings
router.get("/recycleBin", (req, res) => {
  const listings = store.getDeletedListings();
  const resources = listings.map(listingMapper);
  return res.status(201).send(resources);
});
// add list to archive
router.patch("/archive/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const listing = store.getListing(id);
  if (listing === undefined || listing === null || listing === -1)
    return res.status(404);
  store.addArchivedListing(listing);
  res.status(201).send();
});

// get archived listings
router.get("/archived", (req, res) => {
  const listings = store.getArchivedListings();
  const resources = listings.map(listingMapper);
  res.status(201).send(resources);
});

// unarchive list
router.patch("/unarchive/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const listing = store.unarchive(id);
  if (listing == null)
    return res
      .status(404)
      .send({ message: "list is not found\ntry to reload the page.." });
  res.status(201).send();
});

module.exports = router;
