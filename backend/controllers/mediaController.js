const asyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");
const Media = require("../models/mediaModel");

// get all media
const getAllMedia = asyncHandler(async (req, res) => {
  const allMedia = await Media.find({});
  res.status(200).json(allMedia);
});

// get single media
const getSingleMedia = asyncHandler(async (req, res) => {
  const media = await Media.findById(req.params.id);

  if (!media) {
    res.status(400);
    throw new Error("There are no media file");
  }

  // if (media.mimeType.split("/")[1] === "zip") {
  //   const downloadPath = path.join(__dirname, `../public/${media.link}`);
  //   req.status(200).download(downloadPath);
  // }

  res.status(200).json(media);
});

// download media
const downloadMedia = asyncHandler(async (req, res) => {
  const media = await Media.findById(req.params.id);
  if (!media) {
    res.status(400);
    throw new Error(`Threre are no media this id ${id}`);
  }
  const downloadPath = path.join(__dirname, `../public/${media.link}`);
  res.status(200).download(downloadPath);
});

// create media
const createMedia = asyncHandler(async (req, res) => {
  res.status(200).json(req.files);
});

// update media
const updateMedia = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const media = await Media.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!media) {
    res.status(400);
    throw new Error(`Threre are no media this id ${id}`);
  }

  res.status(200).json(media);
});

// delete media
const deleteMedia = asyncHandler(async (req, res) => {
  const media = await Media.findById(req.params.id);

  if (!media) {
    res.status(400);
    throw new Error(`Threre are no media this id ${req.params.id}`);
  }

  const filePath = path.join(__dirname, `../public/${media.link}`);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log("err", err);
      return;
    }
  });

  await media.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllMedia,
  getSingleMedia,
  downloadMedia,
  createMedia,
  updateMedia,
  deleteMedia,
};
