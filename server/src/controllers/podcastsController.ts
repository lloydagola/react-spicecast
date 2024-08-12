import podcast from "../models/podcast";

function getPodcast({ params: { id } }: any) {
  return podcast.findById(id);
}
function getPodcasts() {
  return podcast.find();
}
function createPodcasts({
  body: { title, hosts, episodes, genres, thumbnail },
}: any) {
  try {
    const newPodcast = new podcast({
      title,
      hosts,
      episodes,
      genres,
      thumbnail,
    });
    const data = newPodcast.save();
    if (!data) throw new Error("Could not create the podcast...");
    return data;
  } catch (error) {
    console.log("An error ocurred when attempting to save the podcast", error);
  }
}
function updatePodcast({ params: { id }, body: { attribute, value } }: any) {
  try {
    if (!id) throw new Error("ID is required...");
    const updatedPodcast = podcast.findByIdAndUpdate(id, {
      [attribute]: value,
    });
    if (!updatedPodcast)
      throw new Error(
        "An error ocurred while attempting to create the podcast..."
      );
    return updatedPodcast;
  } catch (error) {
    console.log("An error ocurred while attempting to save the podcast", error);
  }
}
function deletePodcast({ params: { id } }: any) {
  try {
    if (!id) throw new Error("ID is required...");
    const deletedPodcast = podcast.findByIdAndDelete(id);
    if (!deletePodcast)
      throw new Error(
        "An error ocurred while attempting to delete the podcast..."
      );
    return deletedPodcast;
  } catch (error) {
    console.log(
      "An error ocurred while attempting to delete the podcast...",
      error
    );
  }
}

export default Object.freeze({
  getPodcast,
  getPodcasts,
  createPodcasts,
  updatePodcast,
  deletePodcast,
});
