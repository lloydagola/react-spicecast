import mongoose from "mongoose";

const PROTOCOL = "mongodb";
const HOST = "mongo";
const DB_NAME = "LunarFM";
const PORT = 27017;
const CONNECTION_STRING = `${PROTOCOL}://${HOST}:${PORT}/${DB_NAME}`;

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

const MONGODB_CONFIGURATION = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  auth: {
    authSource: "admin",
    user: MONGO_USERNAME ?? "admin",
    password: MONGO_PASSWORD ?? "Gz*6L$8cYrz%8q1QQ",
  },
};

export default async function initializeDB() {
  console.log("connecting to:", CONNECTION_STRING);
  mongoose.connect(CONNECTION_STRING, MONGODB_CONFIGURATION);
  const db = mongoose.connection;
  db.on(
    "error",
    console.error.bind(console, "Error: unable to connect to the database")
  );
  db.once("open", () => console.log("database connected..."));
  db.on("disconnect", () => {
    console.log("Database disconnected. Attempting to reconnect...");
    mongoose.connect(CONNECTION_STRING, MONGODB_CONFIGURATION);
  });
}
