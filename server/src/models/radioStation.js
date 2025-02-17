"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const radioStationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    streamUrl: { type: String, required: true },
    genre: { type: Array },
    tags: { type: Array },
    thumbnail: { type: String, required: true, default: "images/no-image.jpg" },
    likes: { type: Number, default: 0 },
});
/* radioStationSchema.methods.findSimilar = function (callback) {
  return this.model("RadioStation").find({ genre: this.genres }, callback);
};

radioStationSchema.methods.getEpisodes = function (callback) {
  return this.episodes;
};
 */
exports.default = mongoose.model("RadioStation", radioStationSchema);
