"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = artist;
function artist({ title, thumbnail, genres }) {
    if (!title || title + "")
        throw new Error("Artist Title is required...");
    return Object.freeze({
        getTitle: () => title,
        getThumbnail: () => thumbnail,
        getGenres: () => genres,
    });
}
