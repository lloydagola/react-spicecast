"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const episodeSchema = new mongoose_1.default.Schema({
    title: { required: true, default: "Untitled", type: String },
    podcast: {
        required: true,
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Podcast",
    },
    path: {
        required: true,
        default: "http://localhost:3000/audio/bubbles.mp3",
        type: String,
    },
});
exports.default = mongoose_1.default.model("Episode", episodeSchema);
