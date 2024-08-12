import album from "../models/album";

function getAlbum({ params: { id } }: any) {
  try {
    return album.findById(id);
  } catch (error) {
    console.log("Could not fetch the Albums...");
  }
}

function getAlbums() {
  try {
    return album.find();
  } catch (error) {
    console.log("Could not fetch the Albums...");
  }
}

function postAlbum({ body: albumInfo }: any) {
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

function updateAlbum({ params: { id }, body: { attribute, value } }: any) {
  if (!attribute) throw new Error("Attribute is required...");
  if (!value) throw new Error("Value is required...");
  if (!id) throw new Error("Album ID is required...");

  const updatedAlbum = album.findByIdAndUpdate(id, {
    [attribute]: value,
  });

  return updatedAlbum;
}

function deleteAlbum({ params: { id } }: any) {
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
