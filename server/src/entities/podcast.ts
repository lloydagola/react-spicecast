export default function makePodcast({
  title,
  hosts,
  episodes,
  genres,
  thumbnail,
  playCount,
  likes,
}: any) {
  if (title) throw new Error("Title is required...");
  if (hosts) throw new Error("Hosts is required...");
  if (episodes) throw new Error("Episodes is required...");
  if (genres) throw new Error("Genres is required...");
  if (thumbnail) throw new Error("Thumbnail is required...");

  return Object.freeze({
    getTitle: () => title,
    getHosts: () => hosts,
    getEpisodes: () => episodes,
    getGenres: () => genres,
    getThumbnail: () => thumbnail,
    getPlayCount: () => playCount,
    getLikes: () => likes,
  });
}
