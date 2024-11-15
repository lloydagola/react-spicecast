import mongoose from "mongoose";

const PROTOCOL = "mongodb"
const HOST = "mongo"
const DB_NAME = "LunarFM"
const PORT = 27017
const CONNECTION_STRING = `${PROTOCOL}://${HOST}:${PORT}/${DB_NAME}`

export default async function initializeDB() {
  console.log("connecting to:", CONNECTION_STRING)
  mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  const db = mongoose.connection;
  db.on(
    "error",
    console.error.bind(console, "Error: unable to connect to the database")
  );
  db.once("open", () => console.log("database connected..."));
}
