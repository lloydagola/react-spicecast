"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const track_1 = __importDefault(require("../entities/track"));
const track_2 = __importDefault(require("../models/track"));
function getTracks() {
    try {
        return track_2.default.find();
        //.populate("album", ["title", "thumbnail"])
        //.populate("contributingArtists", ["title", "thumbnail"]);
    }
    catch (error) {
        console.log("Could not find the tracks...", error);
    }
}
function getTrack({ params: { id } }) {
    try {
        return track_2.default.findById(id);
        //.populate("album", ["title", "thumbnail"])
        //.populate("contributingArtists", ["title", "thumbnail"]);
    }
    catch (error) {
        console.log("Could not find the track...", error);
    }
}
function postTrack({ body: { title, genres, album, streamUrl, contributingArtists }, }) {
    if (!title)
        throw new Error("Track title is required...");
    if (!genres || genres.length < 1)
        throw new Error("Generes are required...");
    if (!streamUrl)
        throw new Error("Stream url is required...");
    try {
        if (!album) {
            //create a new Singles Album
            console.log("create a new singles album");
        }
        const newTrack = (0, track_1.default)({
            title,
            genres,
            album,
            streamUrl,
            contributingArtists,
        });
        const saved = new track_2.default({
            title: newTrack.getTitle(),
            genres: newTrack.getGenres(),
            album: newTrack.getAlbum(),
            contributingArtists: newTrack.getContributingArtists(),
            streamUrl: newTrack.getStreamUrl(),
        }).save();
        return saved;
    }
    catch (error) {
        console.log("Could not post the track...", error);
    }
}
function updateTrack({ params: { id }, body: { attribute, value } }) {
    try {
        const updatedTrack = track_2.default.findByIdAndUpdate(id, { [attribute]: value });
        return updatedTrack;
    }
    catch (error) {
        console.log("Could not update the track...", error);
    }
}
function deleteTrack({ params: { id } }) {
    try {
        const deletedTrack = track_2.default.findByIdAndDelete(id);
        return deletedTrack;
    }
    catch (error) {
        console.log("Could not delete the track", error);
    }
}
exports.default = Object.freeze({
    getTrack,
    getTracks,
    postTrack,
    updateTrack,
    deleteTrack,
});
