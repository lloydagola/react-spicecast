export type TPodcast = {
    title: string;
    hosts: string[];
    thumbnail: string;
    genre?:string;
};

export type TAlbum = {
    title: string;
    artists: string[];
    tracks?: any[];
    thumbnail: string;
    genre?:string;
};

export type TRadioStation = {
    title: string;
    streamUrl: string;
    genre?: string;
    thumbnail?: string;
};


type TAudioType = "podcast" | "album" | "radioStation";

type TAudioState = {
    trackType: string;
    isPlaying: boolean;
    title: string;
    streamUrl: string;
    thumbnail?: string;
    duration?: string;
};

export type TAudioData = {
    audioState: TAudioState;
    podcasts: TPodcast[];
    albums: TAlbum[];
    radioStations: TRadioStation[];
};

export type TAudioContext = {
    audioData:TAudioData;
    handlePlay: (track?:any) => void;
    handlePause?: () => void;
    handleStop?: () => void;
}
