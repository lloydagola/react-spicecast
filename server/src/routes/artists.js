"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const artistController_1 = __importDefault(require("../controllers/artistController"));
router.get("/:id", artistController_1.default.getArtist);
router.get("/", artistController_1.default.getArtists);
router.post("/", artistController_1.default.postArtist);
router.patch("/", artistController_1.default.updateArtist);
router.delete("/:id", artistController_1.default.deleteArtist);
exports.default = router;
