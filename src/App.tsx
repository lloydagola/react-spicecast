import { AudioContextProvider } from './contexts/AudioContext';
import Main from './layouts/Main';

import radioStations from './_mocks_/data/radioStations.json';
import albums from 'src/_mocks_/data/albums.json'
import podcasts from 'src/_mocks_/data/podcasts.json';

function App() {
  const AudioData = {
    radioStations,
    podcasts,
    albums
  };

  return (
    <AudioContextProvider value={AudioData}>
      <Main/>
    </AudioContextProvider>
  );
}

export default App;
