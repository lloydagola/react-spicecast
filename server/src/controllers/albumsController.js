"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = __importDefault(require("../models/album"));
function getAlbum(_a) {
    return __awaiter(this, arguments, void 0, function* ({ params: { id } }) {
        try {
            const albumData = yield album_1.default.findById(id).populate("tracks");
            if (!albumData) {
                return Promise.reject(new Error("Album not found"));
            }
            return albumData;
        }
        catch (error) {
            console.error("Could not fetch the Album...", error);
            return Promise.reject(error);
        }
    });
}
function getAlbums() {
    try {
        return album_1.default.find().populate("artist");
    }
    catch (error) {
        console.log("Could not fetch the Albums...");
    }
}
function postAlbum({ body: albumInfo }) {
    if (!albumInfo.title)
        throw new Error("Title is required");
    if (!albumInfo.artist)
        throw new Error("Artist is required");
    if (!albumInfo.thumbnail)
        throw new Error("Thumbnail is required");
    if (!albumInfo.genres)
        throw new Error("Genres is required");
    try {
        const newAlbum = new album_1.default(albumInfo);
        newAlbum.save();
        if (!album_1.default)
            throw new Error("Could not save the album...");
        return newAlbum;
    }
    catch (error) {
        console.log("Could not save the album", error);
    }
    return new album_1.default(albumInfo).save();
}
function updateAlbum({ params: { id }, body: { attribute, value } }) {
    if (!attribute)
        throw new Error("Attribute is required...");
    if (!value)
        throw new Error("Value is required...");
    if (!id)
        throw new Error("Album ID is required...");
    try {
        const updatedAlbum = album_1.default.findByIdAndUpdate(id, {
            [attribute]: value,
        });
        return updatedAlbum;
    }
    catch (error) {
        console.log("An error ocurred while attempting to save the Album...");
    }
}
function deleteAlbum({ params: { id } }) {
    const deletedAlbum = album_1.default.findByIdAndDelete(id);
    return deletedAlbum;
}
const albumsController = Object.freeze({
    getAlbum,
    getAlbums,
    postAlbum,
    updateAlbum,
    deleteAlbum,
});
exports.default = albumsController;
