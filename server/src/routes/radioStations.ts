import express from "express";
import radioStationsController from "../controllers/radioStationsController";
import makeExpressCallback from "../express-callback";

import radioStations from "../_mocks_/data/radioStations.json";
//const { check, validationResult } = require("express-validator");

const router = express.Router();

router.get("/test", (_: any, response: any) => {
  response.status(200).send(radioStations.data);
});

router.get("/", makeExpressCallback(radioStationsController.getRadioStations));

module.exports = router;
