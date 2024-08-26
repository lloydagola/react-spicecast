const router = require("express").Router();
import artistController from "../controllers/artistController";

router.get("/:id", artistController.getArtist);
router.get("/", artistController.getArtists);
router.post("/", artistController.getArtists);
router.delete("/:id", artistController.getArtists);
