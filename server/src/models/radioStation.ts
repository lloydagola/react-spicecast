import mongoose from "mongoose";

const radioStationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genres: { type: [String], required: true },
  streamUrl: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

export default mongoose.model("RadioStation", radioStationSchema);
