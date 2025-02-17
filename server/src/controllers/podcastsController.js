"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const podcast_1 = __importDefault(require("../models/podcast"));
function getPodcast({ params: { id } }) {
    return podcast_1.default.findById(id);
}
function getPodcasts() {
    return podcast_1.default.find();
}
function createPodcasts({ body: { title, hosts, episodes, genres, thumbnail }, }) {
    try {
        const newPodcast = new podcast_1.default({
            title,
            hosts,
            episodes,
            genres,
            thumbnail,
        });
        const data = newPodcast.save();
        if (!data)
            throw new Error("Could not create the podcast...");
        return data;
    }
    catch (error) {
        console.log("An error ocurred when attempting to save the podcast", error);
    }
}
function updatePodcast({ params: { id }, body: { attribute, value }, }) {
    try {
        if (!id)
            throw new Error("ID is required...");
        const updatedPodcast = podcast_1.default.findByIdAndUpdate(id, {
            [attribute]: value,
        });
        if (!updatedPodcast)
            throw new Error("An error ocurred while attempting to create the podcast...");
        return updatedPodcast;
    }
    catch (error) {
        console.log("An error ocurred while attempting to save the podcast", error);
    }
}
function deletePodcast({ params: { id } }) {
    try {
        if (!id)
            throw new Error("ID is required...");
        const deletedPodcast = podcast_1.default.findByIdAndDelete(id);
        if (!deletePodcast)
            throw new Error("An error ocurred while attempting to delete the podcast...");
        return deletedPodcast;
    }
    catch (error) {
        console.log("An error ocurred while attempting to delete the podcast...", error);
    }
}
exports.default = Object.freeze({
    getPodcast,
    getPodcasts,
    createPodcasts,
    updatePodcast,
    deletePodcast,
});
