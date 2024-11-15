"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const episode_1 = __importDefault(require("../models/episode"));
const podcast_1 = __importDefault(require("../models/podcast"));
router.get("/", (_, res) => {
    episode_1.default
        .find()
        .populate("podcast", "title")
        .then((allEpsiodes) => {
        res.status(200).send(allEpsiodes);
    })
        .catch((error) => {
        console.log(error);
        res.status(400).send({ error });
    });
});
router.post("/", (req, res) => {
    var _a;
    if (!req.body.podcast) {
        res.status(400).send("podcast is required...");
    }
    podcast_1.default.findById((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.podcast).then((podcast) => {
        new episode_1.default(Object.assign({}, req.body))
            .save()
            .then((savedEpisode) => {
            podcast.episodes = [...podcast.episodes, savedEpisode._id];
            podcast
                .save()
                .then((_) => res.status(200).send(savedEpisode))
                .catch((error) => res.status(400).send(error));
        })
            .catch((error) => res.status(400).send(error));
    });
});
router.put("/", (req, res) => {
    episode_1.default
        .findByIdAndUpdate(req.body._id, { [req.body.field]: req.body.data })
        .then((episode) => res.status(200).send(episode))
        .catch((error) => res.status(400).send(error));
});
module.exports = router;
