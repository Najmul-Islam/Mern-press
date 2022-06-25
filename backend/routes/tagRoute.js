const express = require("express");
const router = express.Router();

const {
  getAllTag,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../controllers/tagController");

router.route("/").get(getAllTag).post(createTag);
router.route("/:id").get(getSingleTag).put(updateTag).delete(deleteTag);

module.exports = router;
