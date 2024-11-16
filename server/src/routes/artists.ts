import express from "express";
import artistController from "../controllers/artistController";

const router = express.Router();

router.get("/:id", artistController.getArtist);
router.get("/", artistController.getArtists);
router.post("/", artistController.postArtist);
router.patch("/", artistController.updateArtist);
router.delete("/:id", artistController.deleteArtist);

export default router;
