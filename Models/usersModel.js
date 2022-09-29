const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  id: {
    type: Int16Array,
  },
  name: {
    type: String,
    required: true,
  },
  username: "John1_1Dark",
  DateOfBirth: "16-3-2001",
  role: "Administrator",
  countryCode: "+356",
  phoneNumber: "79230096",
  email: "john@domain.com",
  password: "12345",
  images: [{ fileName: "JohnMuller" }],
});

module.exports = mongoose.model("users", usersSchema);
