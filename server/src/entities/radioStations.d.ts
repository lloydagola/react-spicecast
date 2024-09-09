export default function makeRadioStations({ title, genres, streamUrl, thumbnail, }: any): Readonly<{
    getTitle: () => any;
    getGenres: () => any;
    getStreamUrl: () => any;
    getThumbnail: () => any;
}>;
