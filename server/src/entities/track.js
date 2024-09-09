"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeTrack;
function makeTrack({ title, album, contributingArtists, genres, streamUrl, playCount = 0, likes = 0, }) {
    if (!title)
        throw new Error("Track title is required...");
    if (!genres || genres.length < 1)
        throw new Error("Generes are required...");
    if (!streamUrl)
        throw new Error("Track url is required...");
    return Object.freeze({
        getTitle: () => title,
        getAlbum: () => album,
        getContributingArtists: () => contributingArtists,
        getGenres: () => genres,
        getStreamUrl: () => streamUrl,
        getPlayCount: () => playCount,
        getLikes: () => likes,
    });
}
