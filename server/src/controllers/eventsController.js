"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("../models/event"));
function getEvents() {
    try {
        return event_1.default.find();
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the events", error);
    }
}
function getEvent({ params: { id } }) {
    try {
        return event_1.default.findById(id);
    }
    catch (error) {
        console.log("An error ocurred while attempting to fetch the event", error);
    }
}
function postEvent({ body: { title, genres, thumbnail, description }, }) {
    try {
        const newEvent = new event_1.default({ title, genres, thumbnail, description });
        return newEvent.save();
    }
    catch (error) {
        console.log("An error ocurred while attempting to save the event", error);
    }
}
function updateEvent({ params: { id }, body: { attribute, value } }) {
    try {
        return event_1.default.findByIdAndUpdate(id, { [attribute]: value });
    }
    catch (error) {
        console.log("An error ocurred while attempting to update the event", error);
    }
}
function deleteEvent({ params: { id } }) {
    try {
        return event_1.default.findByIdAndDelete(id);
    }
    catch (error) {
        console.log("An error ocurred while attempting to delete the event", error);
    }
}
exports.default = Object.freeze({
    getEvents,
    getEvent,
    postEvent,
    updateEvent,
    deleteEvent,
});
