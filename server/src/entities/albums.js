"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeAlbum;
function makeAlbum({ title, artist, thumbnail, genres, tracks, }) {
    if (!title)
        throw new Error("Title is required");
    if (!artist)
        throw new Error("Artist is required");
    if (!thumbnail)
        throw new Error("Thumbnail is required");
    if (!genres)
        throw new Error("Genres is required");
    return Object.freeze({
        getTitle: () => title,
        getArtist: () => artist,
        getTracks: () => tracks,
        getThumbnail: () => thumbnail,
        getGenres: () => genres,
    });
}
