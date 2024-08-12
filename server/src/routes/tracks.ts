import express from "express";
import tracksController from "../controllers/tracksController";
import makeExpressCallback from "../express-callback";

const router = express.Router();

router.get("/", makeExpressCallback(tracksController.getTracks));
router.get("/:id", makeExpressCallback(tracksController.getTracks));
router.post("/", makeExpressCallback(tracksController.postTrack));
router.put("/:id", makeExpressCallback(tracksController.updateTrack));
router.delete("/:id", makeExpressCallback(tracksController.deleteTrack));

/* 
router.get("/",(req, res) => {
    track
    .find()
    .populate('album', ['title', 'thumbnail'])
    .populate("contributingArtists", ['title', 'thumbnail'])
    .then(allEpsiodes => {
        res.status(200).send(allEpsiodes)    

    })
    .catch(error => {
        console.log(error);
        
        res.status(400).send({error});
    })
});

router.post("/", (req, res) => {    
    if(!req.body.album || !req.body.contributingArtists){
        res.status(400).send("album and artist are both required...");
    }

    album.findById(req.body.album)
    .then(album => {
        new track({...req.body}).save()
        .then(savedTrack => {             
            album.tracks = [...album.tracks, savedTrack._id];
            album.save()
            .then(savedAlbum => res.status(200).send(savedTrack))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))
    
});

router.post("/many", (req, res) => {
    
});

router.put("/:_id", (req, res) => {
    track.findByIdAndUpdate(req.params._id, {[req.body.field]:req.body.data})
    .then(track => res.status(200).send(track))
    .catch(error => res.status(400).send(error));
});

router.delete('/', (req, res)=> {
    track
    .deleteMany()
    .then(() => res.status(200).send())
    .catch(error => res.status(400).send())
});

 */ module.exports = router;
