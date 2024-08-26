import { Request } from "express";
import artist from "../models/artist";

function getArtist({ params: { id } }: Request) {
  try {
    return artist.findById(id);
  } catch (error) {
    console.log("An error ocurred while attempting to fetch the artist");
  }
}

function getArtists() {
  try {
    return artist.find();
  } catch (error) {
    console.log("An error ocurred while attempting to fetch the artists");
  }
}

function postArtist({ body: artistInfo }: Request) {
  if (!artistInfo.title) throw new Error("Title is required");
  if (!artistInfo.genres) throw new Error("Genre is required");
  if (!artistInfo.thumbnail) throw new Error("Thumbnail is required");

  try {
    console.log("trying...", artistInfo);
    const newArtist = new artist(artistInfo);
    newArtist.save();

    if (!newArtist) throw new Error("Could not save the artist...");
    return newArtist;
  } catch (error) {
    console.log("An error ocurred while attempting to post the artist");
  }
}

function updateArtist({ params: { id }, body: { key, value } }: Request) {
  if (!id) throw new Error("Id is required...");
  if (!key) throw new Error("key is required...");
  if (!value) throw new Error("value is required...");

  try {
    const updatedArtist = artist.findByIdAndUpdate(id, {
      [key]: value,
    });

    if (!updateArtist) throw new Error("Could not save the Artist...");

    return updatedArtist;
  } catch (error) {
    console.log("An error ocurred while attempting to update the artist...");
  }
}

function deleteArtist({ params: { id } }: Request) {
  try {
    const deletedArtist = artist.findByIdAndDelete(id);
    if (!deletedArtist)
      throw new Error("An error while attempt8ing to save the artist...");

    return deleteArtist;
  } catch (error) {
    console.log("An error ocurred while attempting to delete the artist...");
  }
}

export default Object.freeze({
  getArtist,
  getArtists,
  postArtist,
  updateArtist,
  deleteArtist,
});
