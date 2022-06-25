const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
    },
    taxonomy: {
      type: String,
      default: "category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
