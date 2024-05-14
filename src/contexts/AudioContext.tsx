import { ReactNode, createContext, useReducer } from "react";
import { TAudioContext, TAudioData } from 'src/types/types';

import radioStations from 'src/_mocks_/data/radioStations.json';
import albums from 'src/_mocks_/data/albums.json'
import podcasts from 'src/_mocks_/data/podcasts.json';

enum EAudio{
  PLAY= 'PLAY',
  STOP= 'STOP',
  PAUSE= 'PAUSE',
};

const initialAudioData = {
    audioState: { 
        trackType: 'radioStation',
        isPlaying: false,
        title:"LunarFM",
        streamUrl:"http://208.64.184.36/sf1033",
        thumbnail:"/images/th-2.jpg",
        duration:""
    },
    radioStations,
    podcasts,
    albums
};


const initialState ={     
    audioData: {
        audioState: { 
                trackType: 'radioStation',
                isPlaying: false,
                title:"LunarFM",
                streamUrl:"http://208.64.184.36/sf1033",
                thumbnail:"/images/th-2.jpg",
                duration:""
            }, 
            radioStations:[], 
            albums:[], 
            podcasts:[]
    },
    handlePlay: function(){},
    handlePause: function(){},
    handleStop: function(){},
}

// value={{audioData, handlePlay,handlePause,handleStop}}


function audioReducer(prevState:TAudioData, action:any):TAudioData{
  switch(action.type){
    case EAudio.PLAY: {
        const candidate = { 
        ...prevState,
        audioState : {
          ...prevState.audioState,
          isPlaying: true,
          title: action.data.title,
          streamUrl: action.data.streamUrl,
          thumbnail: action.data.thumbnail
        }
      };
      
      return candidate;
    }
    case EAudio.PAUSE:
    case EAudio.STOP: {
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

const AudioContext = createContext<TAudioContext>(initialState);

function AudioContextProvider({children}:{children:ReactNode | ReactNode[]}){

    const [audioData, dispatch] = useReducer(audioReducer, initialAudioData);

    function handlePlay(track:any):void{
        dispatch({type: EAudio.PLAY, data:track});
    };
    function handlePause():void{
        dispatch({type: EAudio.PAUSE});
    };
    function handleStop():void{
        dispatch({type: EAudio.STOP});
    };

    return <AudioContext.Provider value={{audioData, handlePlay, handlePause, handleStop}}>{children}</AudioContext.Provider>;
}

export {AudioContext, AudioContextProvider};