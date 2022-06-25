const asyncHandler = require("express-async-handler");
const Tag = require("../models/tagModel");

// get all tag
const getAllTag = asyncHandler(async (req, res) => {
  const tags = await Tag.find({});

  res.status(200).json(tags);
});

// get single tag
const getSingleTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findOne({ _id: id });

  if (!tag) {
    res.status(400);
    throw new Error(`No tag with id ${id}`);
  }

  res.status(200).json(tag);
});

// create tag
const createTag = asyncHandler(async (req, res) => {
  const { slug } = req.body;
  if (!req.body) {
    res.status(400);
    throw new Error(`Please add tag`);
  }

  // check if tag exists
  const tagExists = await Tag.findOne({ slug });
  if (tagExists) {
    res.status(400);
    throw new Error(`Tag allredy exists`);
  }

  const tag = await Tag.create(req.body);
  if (tag) {
    res.status(200).json(tag);
  } else {
    res.status(400);
    throw new Error(`Invalid tag data`);
  }
});

// update tag
const updateTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const tag = await Tag.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tag) {
    res.status(400);
    throw new Error(`No tag with id ${id}`);
  }

  res.status(200).json(tag);
});

// delete tag
const deleteTag = asyncHandler(async (req, res) => {
  const tag = await Tag.findById(req.params.id);

  if (!tag) {
    res.status(400);
    throw new Error(`No tag with id ${req.params.id}`);
  }

  await tag.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllTag,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
};
