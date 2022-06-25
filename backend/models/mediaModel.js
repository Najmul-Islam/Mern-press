const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
    type: {
      type: String,
      default: "attachment",
    },
    link: {
      type: String,
    },
    mediaType: {
      type: String,
    },
    mimeType: {
      type: String,
    },
    description: {
      type: String,
    },
    caption: {
      type: String,
    },
    altText: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
