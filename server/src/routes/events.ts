import express from "express";
import events from "../_mocks_/data/events.json";
import makeExpressCallback from "../express-callback";
import eventsController from "../controllers/eventsController";
//import { check, validationResult } from "express-validator";

const router = express.Router();

router.get("/test", (request: any, response: any) => {
  console.log({ request });
  response.status(200).send(events.data);
});

router.get("/test/:id", (req: any, res: any) => {
  if (!req.params) {
    return res.status(200).send(events.data[0]);
  }
  try {
    console.log("mackenzie...", req.params.id);
    res.status(200).send(events.data[req.params.id]);
  } catch (error) {
    console.log("an error occurred", error);
    /**
     * @todo:handle error
     */
  }
});

router.get("/", makeExpressCallback(eventsController.getEvents));
router.get("/:id", makeExpressCallback(eventsController.getEvent));
router.post("/", makeExpressCallback(eventsController.postEvent));
router.put("/", makeExpressCallback(eventsController.updateEvent));
router.delete("/", makeExpressCallback(eventsController.deleteEvent));

export default router;
