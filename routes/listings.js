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
  // ? * --> project required details

  // ?  * --> // User who created the list
  user: Joi.object({
    name: Joi.required(),
    id: Joi.required(),
    image: Joi.required(),
    role: Joi.required(),
  }).required(),

  site: Joi.string().required(),

  address: Joi.object({
    streetLineOne: Joi.string().required(),
    streetLineTwo: Joi.optional(),
    locality: Joi.string().required(),

    // ! * --> location is set to optional in case the user did not give a permission
    location: Joi.object({
      latitude: Joi.number().required(),
      latitudeDelta: Joi.number().optional(),
      longitude: Joi.number().required(),
      longitudeDelta: Joi.number().optional(),
    }).optional(),
  }).required(),

  countryCode: Joi.string().required(),
  clientPhoneNumber: Joi.required(),
  clientFirstName: Joi.string().required(),
  clientLastName: Joi.string().required(),
  email: Joi.string().email().required(),
  initialDate: Joi.date().required(),
  status: Joi.required(),

  // ? * -->  Pickers ids
  projectType: Joi.object().required(),
  poolLocation: Joi.object().required(),
  tileType: Joi.object().required(),

  // ? * --> Check box boolean
  newPool: Joi.required(),
  quotationType: Joi.required(),
  indoor: Joi.required(),
  poolType: Joi.required(),
  poolSteps: Joi.required(),
  poolLeaking: Joi.optional(),

  // ? * -->  Pool parameters required
  poolLength: Joi.required(),
  poolWidth: Joi.required(),
  poolDepthEnd: Joi.required(),
  poolDepthStart: Joi.required(),
  poolVolume: Joi.required(),

  poolPerimeter: Joi.required(),
  copingPerimeter: Joi.required(),

  // ! * --> balance tank parameters
  balanceLength: Joi.optional(),
  balanceWidth: Joi.optional(),
  balanceTankWidth: Joi.optional(),
  balanceTankDepth: Joi.optional(),
  balanceTankVolume: Joi.optional(),

  // ? * -->  optional futures
  numberOfWallInlets: Joi.optional(),
  numberOfSkimmers: Joi.optional(),
  numberOfSumps: Joi.optional(),
  numberOfLights: Joi.optional(),
  spaJets: Joi.optional(),
  counterCurrent: Joi.optional(),
  vacuumPoints: Joi.optional(),
  options: Joi.optional({
    item: Joi.object({
      label: Joi.string(),
      value: Joi.number(),
    }),
  }),
  selectedPackage: Joi.optional(),
  finalPrice: Joi.optional(),
  description: Joi.string().optional().allow(""),
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
    //  * --> get data from the body
    const data = req.body;
    console.log(data);

    // initialize and declare the list * -->

    const listing = {
      // ? * --> required details
      user: JSON.parse(data.user),
      site: data.site,
      email: data.email,
      countryCode: data.countryCode ? data.countryCode : "+356",
      clientPhoneNumber: data.clientPhoneNumber,
      clientFirstName: data.clientFirstName,
      clientLastName: data.clientLastName,
      address: JSON.parse(data.address),
      initialDate: data.initialDate,
      status: data.status,

      // ? * --> Pickers ids
      tileType: JSON.parse(data.poolType),
      projectType: JSON.parse(data.tileType),
      poolLocation: JSON.parse(data.poolLocation),

      // ? * --> check boxes required

      indoor: data.Indoor,
      poolSteps: data.poolSteps,
      quotationType: data.poolSteps,
      newPool: data.poolSteps,
      poolType: data.poolSteps,

      // ? * -->  Pool parameters
      poolLength: data.poolLength,
      poolWidth: data.poolWidth,
      poolDepthEnd: data.poolDepthEnd,
      poolDepthStart: data.poolDepthStart,
      poolVolume: data.poolVolume,

      // ? * --> balance tank Parameters
      balanceLength: data.balanceLength,
      balanceTankWidth: data.balanceTankWidth,
      balanceTankDepth: data.balanceTankDepth,
      balanceTankVolume: data.balanceTankDepth,

      // ? * -->  optional options
      numberOfWallInlets: data.numberOfWallInlets,
      numberOfSkimmers: data.numberOfSkimmers,
      numberOfSumps: data.numberOfSumps,
      numberOfLights: data.numberOfLights,
      spaJets: data.spaJets,
      counterCurrent: data.counterCurrent,
      vacuumPoints: data.vacuumPoints,

      poolLeaking: data.poolLeaking,

      description: data.description,

      poolPerimeter: data.poolPerimeter,
      copingPerimeter: data.copingPerimeter,
      options: JSON.parse(data.options),
      finalPrice: data.finalPrice,
    };

    listing.images = req.images.map((fileName) => ({ fileName: fileName }));
    //  * --> store listing after finished
    store.addListing(listing);

    // ? *--> send response that everything ok
    res.status(201).send();
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
