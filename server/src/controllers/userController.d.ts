import { Request } from "express";
declare function getUsers(): any;
declare function getUser({ params: { id } }: Request): any;
declare function postUser({ body: { username, email, password } }: Request): Promise<import("mongoose").Document<any, any, any>> | undefined;
declare function updateUser({ params: { id }, body: { attribute, value } }: Request): any;
declare function deleteUser({ params: { id } }: Request): any;
declare const _default: Readonly<{
    getUsers: typeof getUsers;
    getUser: typeof getUser;
    postUser: typeof postUser;
    updateUser: typeof updateUser;
    deleteUser: typeof deleteUser;
}>;
export default _default;
