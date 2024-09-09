import { Request } from "express";
declare function getEvents(): any;
declare function getEvent({ params: { id } }: Request): any;
declare function postEvent({ body: { title, genres, thumbnail, description }, }: Request): Promise<import("mongoose").Document<any, any, any>> | undefined;
declare function updateEvent({ params: { id }, body: { attribute, value } }: Request): any;
declare function deleteEvent({ params: { id } }: Request): any;
declare const _default: Readonly<{
    getEvents: typeof getEvents;
    getEvent: typeof getEvent;
    postEvent: typeof postEvent;
    updateEvent: typeof updateEvent;
    deleteEvent: typeof deleteEvent;
}>;
export default _default;
