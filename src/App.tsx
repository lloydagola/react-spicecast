import { useReducer } from 'react';
import { AudioContextProvider } from './contexts/AudioContext';
import Main from './layouts/Main';

import radioStations from './_mocks_/data/radioStations.json';
import albums from 'src/_mocks_/data/albums.json'
import podcasts from 'src/_mocks_/data/podcasts.json';
import { TAudioData } from './types/types';


enum EAudio{
  PLAY= 'PLAY',
  STOP= 'STOP',
  PAUSE= 'PAUSE',
}
  
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

function audioReducer(prevState:TAudioData, action:any):TAudioData{
  switch(action.type){
    case EAudio.PLAY: {
      return { 
        ...prevState,
        audioState : {
          ...prevState.audioState,
          isPlaying: true,
          nowPlaying: action.data.nowPlaying,
          streamUrl: action.data.streamUrl,
          thumbnail: action.data.thumbnail
        }
      }
    }
    case EAudio.PAUSE:
    case EAudio.STOP: {
      console.log('playing...');
      return { 
        ...prevState,
        audioState : {
          ...prevState.audioState,
          isPlaying: false
        }
      }
    }
    default: return prevState;
  }
};

function App() {
  const [audioData, dispatch] = useReducer(audioReducer, initialAudioData);

  function handlePlay(track:any):void{
    dispatch({type: EAudio.PLAY, data:track});
  }
  function handlePause():void{
    dispatch({type: EAudio.PAUSE});
  }
  function handleStop():void{
    dispatch({type: EAudio.STOP});
  }

  

  return (
    <AudioContextProvider value={{audioData, handlePlay,handlePause,handleStop}}>
      <Main/>
    </AudioContextProvider>
  );
}

export default App;
