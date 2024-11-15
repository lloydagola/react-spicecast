"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1({ title, genres, thumbnail, description }) {
    if (!title)
        throw new Error("Title is required...");
    if (!genres)
        throw new Error("Genres are required...");
    if (!thumbnail)
        throw new Error("Thumbnail is required...");
    if (!description)
        throw new Error("Description is required...");
    return Object.freeze({
        getTitle: () => title,
        getGenres: () => genres,
        getThumbnail: () => thumbnail,
        getDescription: () => description,
    });
}
