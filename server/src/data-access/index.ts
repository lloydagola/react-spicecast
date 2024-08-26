const dbName = "LunarFM";
import mongoose from "mongoose";

export default async function initializeDB() {
  mongoose.connect(`mongodb://localhost/${dbName}`, {
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
