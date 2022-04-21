const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 5, maxlength: 200 },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true
    },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo_user", userSchema);
