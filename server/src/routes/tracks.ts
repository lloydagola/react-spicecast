import express from "express";
import tracksController from "../controllers/tracksController";
import makeExpressCallback from "../express-callback";

const router = express.Router();

router.get("/", makeExpressCallback(tracksController.getTracks));
router.get("/:id", makeExpressCallback(tracksController.getTrack));
router.post("/", makeExpressCallback(tracksController.postTrack));
router.put("/:id", makeExpressCallback(tracksController.updateTrack));
router.delete("/:id", makeExpressCallback(tracksController.deleteTrack));

export default router;
