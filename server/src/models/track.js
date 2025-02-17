"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//type: mongoose.Schema.Types.ObjectId,
const TrackSchema = new mongoose_1.default.Schema({
    title: {
        required: true,
        //default: "Untitled",
        type: String,
    },
    genres: Array,
    contributingArtists: [
        {
            //required: true,
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "ContributingArtists",
        },
    ],
    album: {
        //required: true,
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Album",
    },
    streamUrl: {
        required: true,
        //default: "http://localhost:4000/audio/bubbles.mp3",
        type: String,
    },
    playCount: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
});
exports.default = mongoose_1.default.model("Track", TrackSchema);
