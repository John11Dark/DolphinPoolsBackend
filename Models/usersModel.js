const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 3,
    maxLength: 25,
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
  },
  role: {
    type: String,
    required: true,
    default: "User",
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: Array,
  phoneNumber: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 8,
  },
  address: {
    type: Object,
    required: false,
    city: String,
    streetLineOne: String,
    streetLineTwo: String,
    ZIPCode: String,
    houseName: String,
  },
  gender: Boolean,
  dateOfBirth: Date,
  countryCode: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  listingsLength: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("users", userSchema);
