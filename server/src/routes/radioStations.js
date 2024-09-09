"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const radioStationsController_1 = __importDefault(require("../controllers/radioStationsController"));
const express_callback_1 = __importDefault(require("../express-callback"));
const radioStations_json_1 = __importDefault(require("../_mocks_/data/radioStations.json"));
//const { check, validationResult } = require("express-validator");
const router = express_1.default.Router();
router.get("/test", (_, response) => {
    response.status(200).send(radioStations_json_1.default.data);
});
router.get("/", (0, express_callback_1.default)(radioStationsController_1.default.getRadioStations));
exports.default = router;
