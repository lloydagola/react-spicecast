import { RouterProvider } from 'react-router-dom';

import { AudioContextProvider } from './contexts/AudioContext';
import AudioPlayer from './layouts/components/AudioPlayer/AudioPlayer';
import { router } from './routes/router';

function App() {
  return (
    <AudioContextProvider>  
       <RouterProvider router={router} />
       <AudioPlayer/>
    </AudioContextProvider>
  );
}

export default App;
