const express = require("express");
const router = express.Router();
const {
  getAllMedia,
  getSingleMedia,
  downloadMedia,
  createMedia,
  updateMedia,
  deleteMedia,
} = require("../controllers/mediaController");

const { upload } = require("../middlewares/mediaMiddleware");

router.route("/").get(getAllMedia).post(upload.array("media"), createMedia);
router.route("/:id").get(getSingleMedia).put(updateMedia).delete(deleteMedia);
router.route("/download/:id").get(downloadMedia);

module.exports = router;
