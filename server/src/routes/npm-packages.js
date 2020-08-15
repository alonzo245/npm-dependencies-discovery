const express = require("express");
const router = express.Router();
const { getNpmPackageDependencies } = require("../controllers/npm-packages");

router.route("/:packageName/dependencies").get(getNpmPackageDependencies);

module.exports = router;
