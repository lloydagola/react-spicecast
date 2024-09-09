import { Request } from "express";
declare function getTracks(): any;
declare function getTrack({ params: { id } }: Request): any;
declare function postTrack({ body: { title, genres, album, streamUrl, contributingArtists }, }: Request): Promise<import("mongoose").Document<any, any, any>> | undefined;
declare function updateTrack({ params: { id }, body: { attribute, value } }: Request): any;
declare function deleteTrack({ params: { id } }: Request): any;
declare const _default: Readonly<{
    getTrack: typeof getTrack;
    getTracks: typeof getTracks;
    postTrack: typeof postTrack;
    updateTrack: typeof updateTrack;
    deleteTrack: typeof deleteTrack;
}>;
export default _default;
