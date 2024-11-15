import { Request } from "express";
declare function getRadioStations(): any;
declare function getRadioStation({ params: { id } }: Request): any;
declare function postRadioStation({ body: { title, artist, tracks, genres, thumbnail }, }: Request): void;
declare function updateRadioStation({ params: { id }, body: { attribute, value }, }: Request): void;
declare function deleteRadioStation({ params: { id } }: Request): any;
declare const _default: Readonly<{
    getRadioStations: typeof getRadioStations;
    getRadioStation: typeof getRadioStation;
    postRadioStation: typeof postRadioStation;
    updateRadioStation: typeof updateRadioStation;
    deleteRadioStation: typeof deleteRadioStation;
}>;
export default _default;
