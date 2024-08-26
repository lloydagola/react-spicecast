import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  tracks: [{ type: [mongoose.Schema.Types.ObjectId], default: [] }],
  genres: { type: Array, default: ["pop"] },
  thumbnail: { type: String, required: true, default: "images/no-image.jpg" },
});

/* 
albumSchema.methods.findSimilar = function (callback: any) {
  return this.model("Album").find({ genre: this.genres }, callback);
};

albumSchema.methods.getTracks = function (callback: any) {
  return this.tracks;
};
 */
export default mongoose.model("Album", albumSchema);
