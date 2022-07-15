const mongoose = require("mongoose");
const messagesSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
