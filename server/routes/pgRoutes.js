const express = require("express");
const pgController = require("../controllers/pgController");

const router = express.Router();

router.get("/", pgController.getAllPGs);

module.exports = router;