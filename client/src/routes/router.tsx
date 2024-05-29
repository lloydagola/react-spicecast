import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Podcasts from '../pages/Podcasts/Podcasts';
import Albums from '../pages/Albums/Albums';
import RadioStations from '../pages/RadioStations/RadioStations';
import AppTemplate from '../layouts/AppTemplate';

export const router = createBrowserRouter([
  {
    element: <AppTemplate />,
    children: [
      { path: "/", element: (<Home />) },
      { path: '/podcasts', element: (<Podcasts />) },
      { path: '/radioStations', element: (<RadioStations />) },
      { path: '/albums', element: (<Albums />) }
    ]
  },
]);
