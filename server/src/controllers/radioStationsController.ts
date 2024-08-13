import radioStation from "../models/radioStation";

function getRadioStations() {
  try {
    return radioStation.find();
  } catch (error) {
    console.log(
      "An error ocurred while attempting to fetch the radio stations...",
      error
    );
  }
}

function getRadioStation({ params: { id } }: any) {
  try {
    return radioStation.findById(id);
  } catch (error) {
    console.log(
      "An error ocurred while attempting to fetch the Radio Station",
      error
    );
  }
}

function postRadioStation({
  body: { title, artist, tracks, genres, thumbnail },
}: any) {
  try {
    const newRadioStation = new radioStation({
      title,
      artist,
      tracks,
      genres,
      thumbnail,
    });
    newRadioStation.save();
  } catch (error) {
    console.log(
      "An error ocurred while attempting to save the Radio Station",
      error
    );
  }
}

function updateRadioStation({
  params: { id },
  body: { attribute, value },
}: any) {
  try {
    radioStation.findByIdAndUpdate(id, { [attribute]: value });
  } catch (error) {}
}

function deleteRadioStation({ params: { id } }: any) {
  try {
    const deletedRadioStation = radioStation.findByIdAndDelete(id);
    return deletedRadioStation;
  } catch (error) {
    console.log(
      "An error ocurred while attempting to delete the Radio Station",
      error
    );
  }
}

export default Object.freeze({
  getRadioStations,
  getRadioStation,
  postRadioStation,
  updateRadioStation,
  deleteRadioStation,
});
