"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tracksController_1 = __importDefault(require("../controllers/tracksController"));
const express_callback_1 = __importDefault(require("../express-callback"));
const router = express_1.default.Router();
router.get("/", (0, express_callback_1.default)(tracksController_1.default.getTracks));
router.get("/:id", (0, express_callback_1.default)(tracksController_1.default.getTrack));
router.post("/", (0, express_callback_1.default)(tracksController_1.default.postTrack));
router.put("/:id", (0, express_callback_1.default)(tracksController_1.default.updateTrack));
router.delete("/:id", (0, express_callback_1.default)(tracksController_1.default.deleteTrack));
exports.default = router;
