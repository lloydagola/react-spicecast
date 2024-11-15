import { Request } from "express";
declare function getPodcast({ params: { id } }: Request): any;
declare function getPodcasts(): any;
declare function createPodcasts({ body: { title, hosts, episodes, genres, thumbnail }, }: Request): any;
declare function updatePodcast({ params: { id }, body: { attribute, value }, }: Request): any;
declare function deletePodcast({ params: { id } }: Request): any;
declare const _default: Readonly<{
    getPodcast: typeof getPodcast;
    getPodcasts: typeof getPodcasts;
    createPodcasts: typeof createPodcasts;
    updatePodcast: typeof updatePodcast;
    deletePodcast: typeof deletePodcast;
}>;
export default _default;
