const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 5, maxlength: 200 },
    author: { type: String, minlength: 3, maxlength: 30 },
    uid: { type: String },
    isCompleted: { type: Boolean },
    date: { type: Date, default: new Date() }
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", TodoSchema);
