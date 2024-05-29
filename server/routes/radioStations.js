const express = require("express");
const { check, validationResult } = require("express-validator");
const RadioStation = require("../models/radioStation");
const radioStations = require("../_mocks_/data/radioStations.json");

const router = express.Router();

router.get("/test", (request, response) => {
  response.status(200).send(radioStations);
});

module.exports = router;
