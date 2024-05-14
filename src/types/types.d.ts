export type TPodcast = {
    title: string;
    artist: string;
    thumbnail: string;
    genre?:string;
    index: number;
};

export type TAlbum = {
    title: string;
    artist: string;
    thumbnail: string;
    genre?:string;
    index: number;
};

export type TRadioStation = {
    title: string;
    streamUrl: string;
    genre?: string;
    thumbnail?: string;
};

export type TAudioContext = {
    podcasts: TPodcast[];
    albums: TAlbum[];
    radioStations: TRadioStation[];
}
