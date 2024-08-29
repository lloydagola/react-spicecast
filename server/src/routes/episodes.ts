const router = require("express").Router();
import episode from "../models/episode";
import podcast from "../models/podcast";

router.get("/", (_: any, res: any) => {
  episode
    .find()
    .populate("podcast", "title")
    .then((allEpsiodes: any) => {
      res.status(200).send(allEpsiodes);
    })
    .catch((error: any) => {
      console.log(error);

      res.status(400).send({ error });
    });
});

router.post("/", (req: any, res: any) => {
  if (!req.body.podcast) {
    res.status(400).send("podcast is required...");
  }

  podcast.findById(req.body.podcast).then((podcast: any) => {
    new episode({ ...req.body })
      .save()
      .then((savedEpisode: any) => {
        podcast.episodes = [...podcast.episodes, savedEpisode._id];
        podcast
          .save()
          .then((_: any) => res.status(200).send(savedEpisode))
          .catch((error: any) => res.status(400).send(error));
      })
      .catch((error: any) => res.status(400).send(error));
  });
});

router.put("/", (req: any, res: any) => {
  episode
    .findByIdAndUpdate(req.body._id, { [req.body.field]: req.body.data })
    .then((episode: any) => res.status(200).send(episode))
    .catch((error: any) => res.status(400).send(error));
});

module.exports = router;
