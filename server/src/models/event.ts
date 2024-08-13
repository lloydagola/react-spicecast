import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genres: { type: [String], required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Event", eventSchema);
