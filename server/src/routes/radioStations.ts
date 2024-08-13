import radioStationsController from "../controllers/radioStationsController";
import makeExpressCallback from "../express-callback";

const express = require("express");
//const { check, validationResult } = require("express-validator");
const radioStations = require("../_mocks_/data/radioStations.json");

const router = express.Router();

router.get("/test", (request: any, response: any) => {
  response.status(200).send(radioStations.data);
});

router.get("/", makeExpressCallback(radioStationsController.getRadioStations));

module.exports = router;
