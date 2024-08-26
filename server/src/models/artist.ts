import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  title: { required: true, type: String },
  thumbnail: { type: String },
  genres: { required: true },
});

export default mongoose.model("Artist", ArtistSchema);
