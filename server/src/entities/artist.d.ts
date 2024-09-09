type TArtist = {
    title: string;
    thumbnail: string;
    genres: string[];
};
export default function artist({ title, thumbnail, genres }: TArtist): Readonly<{
    getTitle: () => string;
    getThumbnail: () => string;
    getGenres: () => string[];
}>;
export {};
