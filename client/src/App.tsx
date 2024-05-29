import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AudioContextProvider } from './contexts/AudioContext';
import Home from './pages/Home/Home';
import Podcasts from './pages/Podcasts/Podcasts';
import Albums from './pages/Albums/Albums';
import RadioStations from './pages/RadioStations/RadioStations';

const router = createBrowserRouter([
  {path: "/", element: (<Home/>)},
  {path: '/podcasts', element: (<Podcasts/>)},
  {path: '/radioStations', element: (<RadioStations/>)},
  {path: '/albums', element: (<Albums/>)}
])



function App() {
 
  return (
    <AudioContextProvider>
       <RouterProvider router={router} />
    </AudioContextProvider>
  );
}

export default App;
