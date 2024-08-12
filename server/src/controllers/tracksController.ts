import makeTrack from "../entities/track";
import track from "../models/track";

function getTracks() {
  try {
    return track.find();
    //.populate("album", ["title", "thumbnail"])
    //.populate("contributingArtists", ["title", "thumbnail"]);
  } catch (error) {
    console.log("Could not find the tracks...", error);
  }
}

function getTrack({ params: { id } }: any) {
  try {
    return track.findById(id);
    //.populate("album", ["title", "thumbnail"])
    //.populate("contributingArtists", ["title", "thumbnail"]);
  } catch (error) {
    console.log("Could not find the track...", error);
  }
}

function postTrack({
  body: { title, genres, album, streamUrl, contributingArtists },
}: any) {
  if (!title) throw new Error("Track title is required...");
  if (!genres || genres.length < 1) throw new Error("Generes are required...");
  if (!streamUrl) throw new Error("Stream url is required...");

  try {
    if (!album) {
      //create a new Singles Album

      console.log("create a new singles album");
    }
    const newTrack = makeTrack({
      title,
      genres,
      album,
      streamUrl,
      contributingArtists,
    });
    const saved = new track({
      title: newTrack.getTitle(),
      genres: newTrack.getGenres(),
      album: newTrack.getAlbum(),
      contributingArtists: newTrack.getContributingArtists(),
      streamUrl: newTrack.getStreamUrl(),
    }).save();

    return saved;
  } catch (error) {
    console.log("Could not post the track...", error);
  }
}

function updateTrack({ params: { id }, body: { attribute, value } }: any) {
  try {
    const updatedTrack = track.findByIdAndUpdate(id, { [attribute]: value });
    return updatedTrack;
  } catch (error) {
    console.log("Could not update the track...", error);
  }
}

function deleteTrack({ params: { id } }: any) {
  try {
    const deletedTrack = track.findByIdAndDelete(id);

    return deletedTrack;
  } catch (error) {
    console.log("Could not delete the track", error);
  }
}

export default Object.freeze({
  getTrack,
  getTracks,
  postTrack,
  updateTrack,
  deleteTrack,
});
