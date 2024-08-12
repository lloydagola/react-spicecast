import mongoose from "mongoose";

//type: mongoose.Schema.Types.ObjectId,

const TrackSchema = new mongoose.Schema({
  title: {
    required: true,
    //default: "Untitled",
    type: String,
  },
  genres: Array,
  contributingArtists: [
    {
      //required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContributingArtists",
    },
  ],
  album: {
    //required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
  streamUrl: {
    required: true,
    //default: "http://localhost:4000/audio/bubbles.mp3",
    type: String,
  },
  playCount: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
});

export default mongoose.model("Track", TrackSchema);
