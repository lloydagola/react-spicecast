"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//const { check, validationResult } = require("express-validator");
const express_callback_1 = __importDefault(require("../express-callback"));
const podcasts_json_1 = __importDefault(require("../_mocks_/data/podcasts.json"));
const podcastsController_1 = __importDefault(require("../controllers/podcastsController"));
const router = express.Router();
router.get("/test", (_, res) => {
    res.status(200).send(podcasts_json_1.default.data);
});
router.get("/test/:id", (req, res) => {
    if (!req.params) {
        return res.status(200).send(podcasts_json_1.default.data[0]);
    }
    try {
        res.status(200).send(podcasts_json_1.default.data[req.params.id]);
    }
    catch (error) {
        console.log("an error occurred", error);
        /**
         * @todo:handle error
         */
    }
});
router.get("/", (0, express_callback_1.default)(podcastsController_1.default.getPodcasts));
router.get("/:_id", (0, express_callback_1.default)(podcastsController_1.default.getPodcast));
router.post("/", (0, express_callback_1.default)(podcastsController_1.default.createPodcasts));
router.put("/:_id", (0, express_callback_1.default)(podcastsController_1.default.updatePodcast));
router.delete("/:_id", (0, express_callback_1.default)(podcastsController_1.default.deletePodcast));
exports.default = router;
