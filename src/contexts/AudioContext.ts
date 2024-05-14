import { createContext } from "react";
import { TAudioContext } from "src/types/types";


const initialState ={     
    audioData: {
        audioState: { 
                trackType: 'radioStation',
                isPlaying: false,
                nowPlaying:"LunarFM",
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

const AudioContext = createContext<TAudioContext>(initialState);
const AudioContextProvider = AudioContext.Provider;

export {AudioContext, AudioContextProvider};