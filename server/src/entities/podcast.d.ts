export default function makePodcast({ title, hosts, episodes, genres, thumbnail, playCount, likes, }: any): Readonly<{
    getTitle: () => any;
    getHosts: () => any;
    getEpisodes: () => any;
    getGenres: () => any;
    getThumbnail: () => any;
    getPlayCount: () => any;
    getLikes: () => any;
}>;
