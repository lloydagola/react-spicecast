export type TAlbum = {
    title: string;
    artist: string;
    tracks?: TTrack[];
    thumbnail: string;
    genres: string[];
};
export type TTrack = {
    title: string;
    artist: string;
    contributingArtists?: string[];
    genres: string[];
    streamUrl: string;
    thumbnail?: string;
};
export default function makeAlbum({ title, artist, thumbnail, genres, tracks, }: TAlbum): Readonly<{
    getTitle: () => string;
    getArtist: () => string;
    getTracks: () => TTrack[] | undefined;
    getThumbnail: () => string;
    getGenres: () => string[];
}>;
