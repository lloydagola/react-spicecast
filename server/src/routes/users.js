"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.default.Router();
router.get("/", userController_1.default.getUsers);
router.get("/:id", userController_1.default.getUser);
router.post("/", userController_1.default.postUser);
router.put("/:id", userController_1.default.updateUser);
router.delete("/:id", userController_1.default.deleteUser);
