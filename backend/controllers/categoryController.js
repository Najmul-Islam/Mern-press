const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

// get all category
const getAllCategory = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.status(200).json(categories);
});

// get single category
const getSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ _id: id });

  if (!category) {
    res.status(400);
    throw new Error(`No category with id ${id}`);
  }

  res.status(200).json(category);
});

// create category
const createCategory = asyncHandler(async (req, res) => {
  const { slug } = req.body;

  if (!req.body) {
    res.status(400);
    throw new Error(`Please add text`);
  }

  // check if category exists
  const categoryExists = await Category.findOne({ slug });
  if (categoryExists) {
    res.status(400);
    throw new Error("Category alredy exists");
  }

  const category = await Category.create(req.body);

  if (category) {
    res.status(200).json(category);
  } else {
    res.status(400);
    throw new Error("Invalid category data");
  }
});

// upadate category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!category) {
    res.status(400);
    throw new Error(`No category with id ${id}`);
  }

  res.status(200).json(category);
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error(`No category with id ${req.params.id}`);
  }

  await category.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllCategory,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
