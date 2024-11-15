"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = __importDefault(require("../models/artist"));
function getArtist({ params: { id } }) {
    try {
        return artist_1.default.findById(id);
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the artist");
    }
}
function getArtists() {
    try {
        return artist_1.default.find();
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the artists");
    }
}
function postArtist({ body: artistInfo }) {
    if (!artistInfo.title)
        throw new Error("Title is required");
    if (!artistInfo.genres)
        throw new Error("Genre is required");
    if (!artistInfo.thumbnail)
        throw new Error("Thumbnail is required");
    try {
        console.log("trying...", artistInfo);
        const newArtist = new artist_1.default(artistInfo);
        newArtist.save();
        if (!newArtist)
            throw new Error("Could not save the artist...");
        return newArtist;
    }
    catch (error) {
        console.log("An error ocurred while attempting to post the artist");
    }
}
function updateArtist({ params: { id }, body: { key, value } }) {
    if (!id)
        throw new Error("Id is required...");
    if (!key)
        throw new Error("key is required...");
    if (!value)
        throw new Error("value is required...");
    try {
        const updatedArtist = artist_1.default.findByIdAndUpdate(id, {
            [key]: value,
        });
        if (!updateArtist)
            throw new Error("Could not save the Artist...");
        return updatedArtist;
    }
    catch (error) {
        console.log("An error ocurred while attempting to update the artist...");
    }
}
function deleteArtist({ params: { id } }) {
    try {
        const deletedArtist = artist_1.default.findByIdAndDelete(id);
        if (!deletedArtist)
            throw new Error("An error while attempt8ing to save the artist...");
        return deleteArtist;
    }
    catch (error) {
        console.log("An error ocurred while attempting to delete the artist...");
    }
}
exports.default = Object.freeze({
    getArtist,
    getArtists,
    postArtist,
    updateArtist,
    deleteArtist,
});
