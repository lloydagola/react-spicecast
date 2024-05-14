import { createContext } from "react";
import { TAudioContext } from "src/types/types";


const AudioContext = createContext<TAudioContext>({radioStations:[], albums:[], podcasts:[]});
const AudioContextProvider = AudioContext.Provider;

export {AudioContext, AudioContextProvider};