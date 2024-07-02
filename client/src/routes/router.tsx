import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages/Home/Home";
import Podcasts from "src/pages/Podcasts/Podcasts";
import Albums from "src/pages/Albums/Albums";
import AlbumDetails from "src/pages/AlbumDetails/AlbumDetails";
import Events from "src/pages/Events/Events";
import EventsDetails from "src/pages/EventDetails/EventDetails";
import RadioStations from "src/pages/RadioStations/RadioStations";
import PodcastDetails from "src/pages/PodcastDetails/PodcastDetails";
import AppTemplate from "src/layouts/AppTemplate";

export const router = createBrowserRouter([
  {
    element: <AppTemplate />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/podcasts", element: <Podcasts /> },
      { path: "/podcasts/:id", element: <PodcastDetails /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:id", element: <EventsDetails /> },
      { path: "/radioStations", element: <RadioStations /> },
      { path: "/radioStations/:id", element: <PodcastDetails /> },
      { path: "/albums", element: <Albums /> },
      { path: "/albums/:id", element: <AlbumDetails /> },
    ],
  },
]);
