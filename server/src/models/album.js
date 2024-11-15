"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const albumSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true, ref: "Artist" },
    tracks: [
        { type: [mongoose_1.default.Schema.Types.ObjectId], default: [], ref: "Track" },
    ],
    genres: { type: Array, default: ["pop"] },
    thumbnail: { type: String, required: true, default: "images/no-image.jpg" },
});
/*
albumSchema.methods.findSimilar = function (callback: any) {
  return this.model("Album").find({ genre: this.genres }, callback);
};

albumSchema.methods.getTracks = function (callback: any) {
  return this.tracks;
};
 */
exports.default = mongoose_1.default.model("Album", albumSchema);
