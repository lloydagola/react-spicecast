import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  history: { type: [String], required: true },
  likedTracks: { type: [String], required: true },
  playlist: { type: [String], required: true },
});

export default mongoose.model("User", userSchema);
