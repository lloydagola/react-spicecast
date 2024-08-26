import initializeDB from "./data-access";

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
import podcastRouter from "./routes/podcasts";
import radioStationRouter from "./routes/radioStations";
import eventsRouter from "./routes/events";
const episodeRouter = require("./routes/episodes");
import albumRouter from "./routes/albums";
import trackRouter from "./routes/tracks";
import artists from "./routes/artists";
const genreRouter = require("./routes/genres");
const hostRouter = require("./routes/hosts");

initializeDB();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/podcasts", podcastRouter);
app.use("/api/radioStations", radioStationRouter);
app.use("/api/events", eventsRouter);
app.use("/api/episodes", episodeRouter);
app.use("/api/albums", albumRouter);
app.use("/api/tracks", trackRouter);
app.use("/api/artist", artists);
app.use("/api/genres", genreRouter);
app.use("/api/hosts", hostRouter);

//set static folder
app.use(express.static(path.join(__dirname, "/build")));
app.use(express.static(path.join(__dirname, "/public")));
app.get("*", (_: any, res: any) => {
  res.sendFile(path.join(__dirname, "build"));
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
