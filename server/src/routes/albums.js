"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const albumsController_1 = __importDefault(require("../controllers/albumsController"));
const express_callback_1 = __importDefault(require("../express-callback"));
const albums_json_1 = __importDefault(require("../_mocks_/data/albums.json"));
const router = require("express").Router();
router.get("/test", (req, res) => {
    const { start = 0, end } = req.query;
    if (!end) {
        return res.status(200).send(albums_json_1.default.data.slice(start));
    }
    res.status(200).send(albums_json_1.default.data.slice(start, end));
});
router.get("/test/:id", (req, res) => {
    if (!req.params) {
        return res.status(200).send(albums_json_1.default.data[0]);
    }
    try {
        res.status(200).send(albums_json_1.default.data[req.params.id]);
    }
    catch (error) {
        console.log("an error occurred", error);
        /**
         * @todo:handle error
         */
    }
});
router.get("/", (0, express_callback_1.default)(albumsController_1.default.getAlbums));
router.get("/:id", (0, express_callback_1.default)(albumsController_1.default.getAlbum));
router.post("/", (0, express_callback_1.default)(albumsController_1.default.postAlbum));
router.put("/:id", (0, express_callback_1.default)(albumsController_1.default.updateAlbum));
router.delete("/:id", (0, express_callback_1.default)(albumsController_1.default.deleteAlbum));
exports.default = router;
