import { Request } from "express";
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

function getRadioStation({ params: { id } }: Request) {
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
}: Request) {
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
}: Request) {
  try {
    radioStation.findByIdAndUpdate(id, { [attribute]: value });
  } catch (error) {}
}

function deleteRadioStation({ params: { id } }: Request) {
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
