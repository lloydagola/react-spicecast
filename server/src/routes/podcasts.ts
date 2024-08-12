const express = require("express");
//const { check, validationResult } = require("express-validator");
import makeExpressCallback from "../express-callback";
import test from "../_mocks_/data/podcasts.json";
import podcastsController from "../controllers/podcastsController";

const router = express.Router();

router.get("/test", (_: any, res: any) => {
  res.status(200).send(test.data);
});

router.get("/test/:id", (req: any, res: any) => {
  if (!req.params) {
    return res.status(200).send(test.data[0]);
  }
  try {
    res.status(200).send(test.data[req.params.id]);
  } catch (error) {
    console.log("an error occurred", error);
    /**
     * @todo:handle error
     */
  }
});

router.get("/", makeExpressCallback(podcastsController.getPodcasts));
router.get("/:_id", makeExpressCallback(podcastsController.getPodcast));
router.post("/", makeExpressCallback(podcastsController.createPodcasts));
router.put("/:_id", makeExpressCallback(podcastsController.updatePodcast));
router.delete("/:_id", makeExpressCallback(podcastsController.deletePodcast));

export default router;
