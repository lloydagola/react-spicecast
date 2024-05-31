import { RouterProvider } from 'react-router-dom';

import { AudioContextProvider } from './contexts/AudioContext';
import AudioPlayer from './layouts/components/AudioPlayer/AudioPlayer';
import { router } from './routes/router';
import { AppContextProvider } from './contexts/AppContext';

function App() {
  return (
    <AppContextProvider>
      <AudioContextProvider>  
        <RouterProvider router={router} />
        <AudioPlayer/>
      </AudioContextProvider>
    </AppContextProvider>
  );
}

export default App;
