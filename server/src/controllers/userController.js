"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../entities/user"));
const user_2 = __importDefault(require("../models/user"));
function getUsers() {
    try {
        return user_2.default.find();
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the users...");
    }
}
function getUser({ params: { id } }) {
    try {
        return user_2.default.findById(id);
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the user...");
    }
}
function postUser({ body: { username, email, password } }) {
    try {
        const newUser = (0, user_1.default)({ username, email, password });
        const result = new user_2.default({
            username: newUser.getUsername,
            email: newUser.getEmail,
            password: newUser.getPassword,
        });
        return result.save();
    }
    catch (error) {
        console.log("An error ocurred while attempting to save the user...");
    }
}
function updateUser({ params: { id }, body: { attribute, value } }) {
    try {
        const updatedUser = user_2.default.findByIdAndUpdate(id, { [attribute]: value });
        if (!updateUser)
            throw new Error("Unable to update the new user");
        return updatedUser;
    }
    catch (error) {
        console.log("An error ocurred while attempting to update the user...");
    }
}
function deleteUser({ params: { id } }) {
    try {
        const deletedUser = user_2.default.findByIdAndDelete(id);
        return deletedUser;
    }
    catch (error) {
        console.log("An error ocurred while attempting to save the user...");
    }
}
exports.default = Object.freeze({
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser,
});
