"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ArtistSchema = new mongoose_1.default.Schema({
    title: { required: true, type: String },
    thumbnail: { type: String },
    genres: { required: true, type: Array, default: [] },
});
exports.default = mongoose_1.default.model("Artist", ArtistSchema);
