const express = require("express");
const { check, validationResult } = require("express-validator");
const events = require("../_mocks_/data/events.json");

const router = express.Router();

router.get("/test", (request, response) => {
  response.status(200).send(events.data);
});

router.get("/test/:id", (req, res) => {
  if (!req.params) {
    return res.status(200).send(events.data[0]);
  }
  try {
    console.log("mackenzie...", req.params.id);
    res.status(200).send(events.data[req.params.id]);
  } catch (error) {
    console.log("an error occurred", error);
    /**
     * @todo:handle error
     */
  }
});

module.exports = router;
