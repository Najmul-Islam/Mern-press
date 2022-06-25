const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// const { imgUploader } = require("../middlewares/mediaMiddleware");

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getSinglePost).put(updatePost).delete(deletePost);

module.exports = router;
