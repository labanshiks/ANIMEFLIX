const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    logo: { type: String },
    thumbnail: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true } //created at and updated at time stamps
);

module.exports = mongoose.model("Movie", MovieSchema);
