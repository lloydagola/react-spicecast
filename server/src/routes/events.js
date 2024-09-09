"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_json_1 = __importDefault(require("../_mocks_/data/events.json"));
const express_callback_1 = __importDefault(require("../express-callback"));
const eventsController_1 = __importDefault(require("../controllers/eventsController"));
//import { check, validationResult } from "express-validator";
const router = express_1.default.Router();
router.get("/test", (request, response) => {
    console.log({ request });
    response.status(200).send(events_json_1.default.data);
});
router.get("/test/:id", (req, res) => {
    if (!req.params) {
        return res.status(200).send(events_json_1.default.data[0]);
    }
    try {
        console.log("mackenzie...", req.params.id);
        res.status(200).send(events_json_1.default.data[req.params.id]);
    }
    catch (error) {
        console.log("an error occurred", error);
        /**
         * @todo:handle error
         */
    }
});
router.get("/", (0, express_callback_1.default)(eventsController_1.default.getEvents));
router.get("/:id", (0, express_callback_1.default)(eventsController_1.default.getEvent));
router.post("/", (0, express_callback_1.default)(eventsController_1.default.postEvent));
router.put("/", (0, express_callback_1.default)(eventsController_1.default.updateEvent));
router.delete("/", (0, express_callback_1.default)(eventsController_1.default.deleteEvent));
exports.default = router;
