import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface IArtistInput {
  user: UserDocument["_id"];
  title: string;
  genres: Array<string>;
  contributingArtists: Array<string>;
  album: string;
  playCount: number;
  likes: number;
  thumbnail: string;
  streamUrl: string;
}

export interface IArtistDocument extends IArtistInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const artistSchema = new mongoose.Schema({
  title: { required: true, type: String },
  thumbnail: { type: String },
  genres: { required: true, type: Array, default: [] },
});

const ArtistModel = mongoose.model<IArtistDocument>("Artist", artistSchema);

export default ArtistModel;
