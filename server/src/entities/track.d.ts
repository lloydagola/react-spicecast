export default function makeTrack({ title, album, contributingArtists, genres, streamUrl, playCount, likes, }: any): Readonly<{
    getTitle: () => any;
    getAlbum: () => any;
    getContributingArtists: () => any;
    getGenres: () => any;
    getStreamUrl: () => any;
    getPlayCount: () => any;
    getLikes: () => any;
}>;
