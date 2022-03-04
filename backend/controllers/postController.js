const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const { BadRequestError, NotFoundError } = require("../errors");
const Post = require("../models/postsSchema");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort("createdAt");

  res.status(StatusCodes.OK).json({ posts });
});

const getPost = async (req, res, next) => {
  const { id: postId } = req.params;

  const post = await Post.findOne({ _id: postId });

  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`);
  }

  res.status(StatusCodes.OK).json({ post });
};

const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post });
};

const updatePost = async (req, res) => {
  const { id: postId } = req.params;

  const post = await Post.findOneAndUpdate({ _id: postId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    throw new BadRequestError(`no post with id ${postId}`);
  }

  res.status(StatusCodes.Ok).json({ post });
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;

  const post = await Post.findOneAndDelete({ _id: postId });

  if (!post) {
    throw new BadRequestError(`no post with id ${postId}`);
  }

  res.status(StatusCodes.OK).json({ post });
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
