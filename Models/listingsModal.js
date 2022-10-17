const mongoose = require("mongoose");

const clientsSchema = mongoose.Schema({
  clientFirstName: { type: String, required: true },
  clientLastName: { type: String, required: true },
  countryCode: "+356",
  clientPhoneNumber: "79230096",
  email: "email@gm.com",
});

const addressSchema = mongoose.Schema({
  streetLineOne: String,
  streetLineTwo: String,
  locality: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "localites",
  },
  location: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number,
  },
});

const commentsSchema = mongoose.Schema({});
const requiredOptionsSchema = mongoose.Schema({
  indoor: { type: Boolean, required: true },
  poolSteps: { type: Boolean, required: true },
  quotationType: { type: Boolean, required: true },
  newPool: { type: Boolean, required: true },
  poolType: { type: Boolean, required: true },
  poolLeaking: { type: Boolean, required: true },
});
const optionsSchema = mongoose.Schema({
  numberOfWallInlets: {
    required: false,
    type: Number,
  },
  numberOfSkimmers: {
    required: false,
    type: Number,
  },
  numberOfSumps: {
    required: false,
    type: Number,
  },
  numberOfLights: {
    required: false,
    type: Number,
  },
  spaJets: {
    required: false,
    type: Number,
  },
  counterCurrent: {
    required: false,
    type: Number,
  },
  vacuumPoints: {
    required: false,
    type: Number,
  },
});
const poolParametersSchema = mongoose.Schema({});
const pickersSchema = mongoose.Schema({});
const detailsSchema = mongoose.Schema({});
// ? * -->  example

//     tileType: {
//       label: "Mosaic",
//       value: 1,
//       icon: "overscan",
//       backgroundColor: "#ea552b",
//     },
//     projectType: {
//       label: "Pool",
//       value: 0,
//       icon: "pool",
//       backgroundColor: "#BEB3AD",
//     },

//     poolLocation: {
//       label: "in-Ground",
//       value: 0,
//       icon: "floor-plan",
//       backgroundColor: "#55bbda",
//     },

const listingsSchema = mongoose.Schema({
  initialDate: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  site: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
  images: Array,
  description: String,
  client: {
    type: mongoose.SchemaTypes.ObjectId,

    ref: "clients",
  },
  address: addressSchema,
  options: optionsSchema,
  poolParameters: poolParametersSchema,
  requiredOptions: requiredOptionsSchema,
  pickers: pickersSchema,
  comments: commentsSchema,
  details: detailsSchema,
});

module.exports = mongoose.model("listings", listingsSchema);
