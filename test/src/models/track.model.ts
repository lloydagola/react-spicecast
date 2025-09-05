import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
//import { AlbumDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface ITrackInput {
  //album: AlbumDocument["_id"];
  title: string;
  genres: Array<string>;
  contributingArtists: Array<string>;
  playCount: number;
  likes: number;
  thumbnail: string;
  streamUrl: string;
}

export interface TrackDocument extends ITrackInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const trackSchema = new mongoose.Schema({
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
    required: true,
    default: "Singles",
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

const TrackModel = mongoose.model<TrackDocument>("Track", trackSchema);

export default TrackModel;
