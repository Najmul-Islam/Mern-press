const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    guid: {
      type: String,
      // required: [true, "Please provide title"],
    },
    slug: {
      type: String,
    },
    type: {
      type: String,
      default: "post",
    },
    link: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    featuredMedia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Media",
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    tags: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
    authorInfo: [
      {
        displayName: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        authorLink: {
          type: String,
        },
      },
    ],
    commentInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
