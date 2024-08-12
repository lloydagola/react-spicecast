import albumsController from "../controllers/albumsController";
import makeExpressCallback from "../express-callback";
import test from "../_mocks_/data/albums.json";

const router = require("express").Router();

router.get("/test", (req: any, res: any) => {
  const { start = 0, end } = req.query;
  if (!end) {
    return res.status(200).send(test.data.slice(start));
  }
  res.status(200).send(test.data.slice(start, end));
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

router.get("/", makeExpressCallback(albumsController.getAlbums));
router.get("/:id", makeExpressCallback(albumsController.getAlbum));
router.post("/", makeExpressCallback(albumsController.postAlbum));
router.put("/:id", makeExpressCallback(albumsController.updateAlbum));
router.delete("/:id", makeExpressCallback(albumsController.deleteAlbum));

module.exports = router;
