import { useReducer } from 'react';
import { AudioContextProvider } from './contexts/AudioContext';
import Main from './layouts/Main';

import radioStations from './_mocks_/data/radioStations.json';
import albums from 'src/_mocks_/data/albums.json'
import podcasts from 'src/_mocks_/data/podcasts.json';
import { TAudioData } from './types/types';


  
const initialAudioData = {
    audioState: { 
        trackType: 'radioStation',
        isPlaying: false,
        nowPlaying:"LunarFM",
        streamUrl:"http://208.64.184.36/sf1033",
        thumbnail:"/images/th-2.jpg",
        duration:""
    },
    radioStations,
    podcasts,
    albums
};


function App() {
 
  return (
    <AudioContextProvider>
      <Main/>
    </AudioContextProvider>
  );
}

export default App;
