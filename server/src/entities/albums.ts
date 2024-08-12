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

function makeAlbum({ title, artist, thumbnail, genres, tracks }: TAlbum) {
  if (!title) throw new Error("Title is required");
  if (!artist) throw new Error("Artist is required");
  if (!thumbnail) throw new Error("Thumbnail is required");
  if (!genres) throw new Error("Genres is required");

  return Object.freeze({
    getTitle: () => title,
    getArtist: () => artist,
    getTracks: () => tracks,
    getThumbnail: () => thumbnail,
    getGenres: () => genres,
  });
}

export default makeAlbum;
