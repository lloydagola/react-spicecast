export type TPodcast = {
  title: string;
  hosts: string[];
  episodes: TEpisode[];
  thumbnail: string;
  genre?: string;
};

export type TEvent = {
  title: string;
  date: any;
  thumbnail: string;
  genres?: string;
};

export type TEpisode = {
  title: string;
  tags?: string[];
  streamUrl: string;
  date: string;
};

export type TArtist = {
  _id: string;
  title: string;
  genres: string[];
  thumbnail: string;
};

export type TAlbum = {
  title: string;
  _id: string;
  artists: TArtist[];
  tracks?: TTrack[];
  thumbnail: string;
  description: string;
  genres: string[];
};

export type TRadioStation = {
  title: string;
  streamUrl: string;
  genre?: string;
  thumbnail?: string;
};

export type TTrack = {
  title: string;
  artist: string;
  contributingArtists?: string[];
  genres: string[];
  streamUrl: string;
  thumbnail?: string;
};

type TAudioType = "podcast" | "album" | "radioStation";

type TAudioState = {
  trackType: string;
  isPlaying: boolean;
  playState: string;
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
  audioData: TAudioData;
  handlePlay: (track?: any) => void;
  handlePause?: () => void;
  handleStop?: () => void;
  togglePlay?: () => void;
};
