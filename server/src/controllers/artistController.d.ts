import { Request } from "express";
declare function getArtist({ params: { id } }: Request): any;
declare function getArtists(): any;
declare function postArtist({ body: artistInfo }: Request): import("mongoose").Document<any, any, any> | undefined;
declare function updateArtist({ params: { id }, body: { key, value } }: Request): any;
declare function deleteArtist({ params: { id } }: Request): typeof deleteArtist | undefined;
declare const _default: Readonly<{
    getArtist: typeof getArtist;
    getArtists: typeof getArtists;
    postArtist: typeof postArtist;
    updateArtist: typeof updateArtist;
    deleteArtist: typeof deleteArtist;
}>;
export default _default;
