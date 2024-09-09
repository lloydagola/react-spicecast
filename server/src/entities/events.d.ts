export default function ({ title, genres, thumbnail, description }: any): Readonly<{
    getTitle: () => any;
    getGenres: () => any;
    getThumbnail: () => any;
    getDescription: () => any;
}>;
