import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.postUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
