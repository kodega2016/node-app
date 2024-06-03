const express = require("express");
const { getAll, create } = require("../controllers/users.controller");
const router = express.Router();

// @route GET /api/users
// @desc Get all users
// @access Public
router.route("/").get(getAll).post(create);

module.exports = router;
