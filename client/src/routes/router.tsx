import { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("src/pages/Home/Home"));
const Albums = lazy(() => import("src/pages/Albums/Albums"));
const Podcasts = lazy(() => import("src/pages/Podcasts/Podcasts"));
const AlbumDetails = lazy(() => import("src/pages/AlbumDetails/AlbumDetails"));
const Events = lazy(() => import("src/pages/Events/Events"));
const EventDetails = lazy(() => import("src/pages/EventDetails/EventDetails"));
const RadioStations = lazy(
  () => import("src/pages/RadioStations/RadioStations")
);
const PodcastDetails = lazy(
  () => import("src/pages/PodcastDetails/PodcastDetails")
);
const AppTemplate = lazy(() => import("src/layouts/AppTemplate"));

export const router = createBrowserRouter([
  {
    element: <AppTemplate />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/podcasts", element: <Podcasts /> },
      { path: "/podcasts/:id", element: <PodcastDetails /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:id", element: <EventDetails /> },
      { path: "/radioStations", element: <RadioStations /> },
      { path: "/radioStations/:id", element: <PodcastDetails /> },
      { path: "/albums", element: <Albums /> },
      { path: "/albums/:id", element: <AlbumDetails /> },
    ],
  },
]);
