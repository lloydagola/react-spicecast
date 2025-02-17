import { Request } from "express";
declare function getAlbum({ params: { id } }: Request): Promise<any>;
declare function getAlbums(): any;
declare function postAlbum({ body: albumInfo }: Request): import("mongoose").Document<any, any, any> | Promise<import("mongoose").Document<any, any, any>>;
declare function updateAlbum({ params: { id }, body: { attribute, value } }: Request): any;
declare function deleteAlbum({ params: { id } }: Request): any;
declare const albumsController: Readonly<{
    getAlbum: typeof getAlbum;
    getAlbums: typeof getAlbums;
    postAlbum: typeof postAlbum;
    updateAlbum: typeof updateAlbum;
    deleteAlbum: typeof deleteAlbum;
}>;
export default albumsController;
