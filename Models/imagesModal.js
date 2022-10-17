const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({});

module.exports = mongoose.model("images", imageSchema);
