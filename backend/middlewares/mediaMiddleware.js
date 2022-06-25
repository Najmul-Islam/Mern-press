const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Media = require("../models/mediaModel");

// file upload folder
const FILES_FOLDER = path.join(__dirname, "../public/uploads/files");
const IMAGES_FOLDER = path.join(__dirname, "../public/uploads/images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.mimetype.split("/")[0];
    if (fileType === "image") {
      cb(null, IMAGES_FOLDER);
    } else {
      cb(null, FILES_FOLDER);
    }
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        // .toLowerCase()
        .split(/[ .:;?!~,_`"&|()<>{}\[\]\r\n/\\]+/)
        .join("-") +
      "-" +
      Date.now();

    const fileType = file.mimetype.split("/")[0] === "image" ? "image" : "file";
    const filePath =
      fileType === "image"
        ? `uploads/images/${fileName}${fileExt}`
        : `uploads/files/${fileName}${fileExt}`;

    Media.create({
      title: fileName,
      slug: fileName.toLowerCase(),
      link: filePath,
      mediaType: fileType,
      mimeType: file.mimetype,
      description: "",
      caption: "",
      altText: "",
    }).then(() => {
      cb(null, fileName + fileExt);
    });
  },
});

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 8,
  },

  // fileFilter: (req, file, cb) => {
  //   if (file.fieldname === "media") {
  //     if (
  //       file.mimetype === "image/png" ||
  //       file.mimetype === "image/jpg" ||
  //       file.mimetype === "image/jpeg"
  //     ) {
  //       cb(null, true);
  //     } else {
  //       cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
  //     }
  //   } else {
  //     cb(new Error("There was an unknown error!"));
  //   }
  // },
});

module.exports = {
  upload,
};
