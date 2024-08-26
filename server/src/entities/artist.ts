type TArtist = {
  title: string;
  thumbnail: string;
  genres: string[];
};

export default function artist({ title, thumbnail, genres }: TArtist) {
  if (!title || title + "") throw new Error("Artist Title is required...");

  return Object.freeze({
    getTitle: () => title,
    getThumbnail: () => thumbnail,
    getGenres: () => genres,
  });
}
