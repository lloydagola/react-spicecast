import { Request } from "express";
import album from "../models/album";

async function getAlbum({ params: { id } }: Request): Promise<any> {
  try {
    const albumData = await album.findById(id).populate("tracks");
    if (!albumData) {
      return Promise.reject(new Error("Album not found"));
    }
    return albumData;
  } catch (error) {
    console.error("Could not fetch the Album...", error);
    return Promise.reject(error);
  }
}

function getAlbums() {
  try {
    return album.find().populate("artist");
  } catch (error) {
    console.log("Could not fetch the Albums...");
  }
}

function postAlbum({ body: albumInfo }: Request) {
  if (!albumInfo.title) throw new Error("Title is required");
  if (!albumInfo.artist) throw new Error("Artist is required");
  if (!albumInfo.thumbnail) throw new Error("Thumbnail is required");
  if (!albumInfo.genres) throw new Error("Genres is required");

  try {
    const newAlbum = new album(albumInfo);

    newAlbum.save();

    if (!album) throw new Error("Could not save the album...");
    return newAlbum;
  } catch (error) {
    console.log("Could not save the album", error);
  }

  return new album(albumInfo).save();
}

function updateAlbum({ params: { id }, body: { attribute, value } }: Request) {
  if (!attribute) throw new Error("Attribute is required...");
  if (!value) throw new Error("Value is required...");
  if (!id) throw new Error("Album ID is required...");

  try {
    const updatedAlbum = album.findByIdAndUpdate(id, {
      [attribute]: value,
    });

    return updatedAlbum;
  } catch (error) {
    console.log("An error ocurred while attempting to save the Album...");
  }
}

function deleteAlbum({ params: { id } }: Request) {
  const deletedAlbum = album.findByIdAndDelete(id);

  return deletedAlbum;
}

const albumsController = Object.freeze({
  getAlbum,
  getAlbums,
  postAlbum,
  updateAlbum,
  deleteAlbum,
});

export default albumsController;
