const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort("createdAt");

  res.status(200).json({ posts });
});

const getSinglePost = async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findOne({ _id: id });

  if (!post) {
    res.status(400);
    throw new Error(`No post with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ post });
};

const createPost = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add text");
  }
  const post = await Post.create(req.body);

  res.status(200).json(post);
});

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    res.status(400);
    throw new Error(`no post with id ${id}`);
  }

  res.status(201).json({ post });
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error(`no post with id ${req.params.id}`);
  }

  await post.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
