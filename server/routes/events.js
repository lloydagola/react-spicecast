const express = require("express");
const { check, validationResult } = require("express-validator");
const events = require("../_mocks_/data/events.json");

const router = express.Router();

router.get("/test", (request, response) => {
  response.status(200).send(events.data);
});

module.exports = router;
