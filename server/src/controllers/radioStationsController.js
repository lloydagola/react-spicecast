"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const radioStation_1 = __importDefault(require("../models/radioStation"));
function getRadioStations() {
    try {
        return radioStation_1.default.find();
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the radio stations...", error);
    }
}
function getRadioStation({ params: { id } }) {
    try {
        return radioStation_1.default.findById(id);
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the Radio Station", error);
    }
}
function postRadioStation({ body: { title, artist, tracks, genres, thumbnail }, }) {
    try {
        const newRadioStation = new radioStation_1.default({
            title,
            artist,
            tracks,
            genres,
            thumbnail,
        });
        newRadioStation.save();
    }
    catch (error) {
        console.log("An error ocurred while attempting to save the Radio Station", error);
    }
}
function updateRadioStation({ params: { id }, body: { attribute, value }, }) {
    try {
        radioStation_1.default.findByIdAndUpdate(id, { [attribute]: value });
    }
    catch (error) { }
}
function deleteRadioStation({ params: { id } }) {
    try {
        const deletedRadioStation = radioStation_1.default.findByIdAndDelete(id);
        return deletedRadioStation;
    }
    catch (error) {
        console.log("An error ocurred while attempting to delete the Radio Station", error);
    }
}
exports.default = Object.freeze({
    getRadioStations,
    getRadioStation,
    postRadioStation,
    updateRadioStation,
    deleteRadioStation,
});
