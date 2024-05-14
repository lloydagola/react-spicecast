import { createContext } from "react";


const AudioContext = createContext<any>(null);
const AudioContextProvider = AudioContext.Provider;

export {AudioContext, AudioContextProvider};