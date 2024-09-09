"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeRadioStations;
function makeRadioStations({ title, genres, streamUrl, thumbnail, }) {
    if (!title)
        throw new Error("Title is required...");
    if (!genres)
        throw new Error("Genres is required...");
    if (!streamUrl)
        throw new Error("StreamUrl is required...");
    if (!thumbnail)
        throw new Error("Thumbnail is required...");
    return Object.freeze({
        getTitle: () => title,
        getGenres: () => genres,
        getStreamUrl: () => streamUrl,
        getThumbnail: () => thumbnail,
    });
}
