import { ReactNode, createContext, useReducer } from "react";
import { TAudioContext, TAudioData } from "src/types/types";

enum EAudio {
  PLAY = "PLAY",
  STOP = "STOP",
  PAUSE = "PAUSE",
}

export enum EAudioState {
  PLAYING = "PLAYING",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

const initialAudioData = {
  audioState: {
    trackType: "radioStation",
    playState: EAudioState.STOPPED,
    isPlaying: false,
    title: "LunarFM",
    streamUrl: "http://208.64.184.36/sf1033",
    thumbnail: "/images/th-2.jpg",
    duration: "",
  },
  radioStations: [],
  podcasts: [],
  albums: [],
};

const initialState = {
  audioData: {
    audioState: {
      trackType: "radioStation",
      playState: EAudioState.STOPPED,
      isPlaying: false,
      title: "LunarFM",
      streamUrl: "http://208.64.184.36/sf1033",
      thumbnail: "/images/th-2.jpg",
      duration: "",
    },
    radioStations: [],
    albums: [],
    podcasts: [],
  },
  handlePlay: function (): void {},
  handlePause: function (): void {},
  handleStop: function (): void {},
};

function audioReducer(prevState: TAudioData, action: any): TAudioData {
  switch (action.type) {
    case EAudio.PLAY: {
      const candidate = {
        ...prevState,
        audioState: {
          ...prevState.audioState,
          playState: EAudioState.PLAYING,
          title: action.data.title,
          streamUrl: action.data.streamUrl,
          thumbnail: action.data.thumbnail,
        },
      };

      return candidate;
    }
    case EAudio.PAUSE: {
      return {
        ...prevState,
        audioState: {
          ...prevState.audioState,
          playState: EAudioState.PAUSED,
        },
      };
    }
    case EAudio.STOP: {
      return {
        ...prevState,
        audioState: {
          ...prevState.audioState,
          playState: EAudioState.STOPPED,
        },
      };
    }
    default:
      return prevState;
  }
}

const AudioContext = createContext<TAudioContext>(initialState);

function AudioContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const [audioData, dispatch] = useReducer(audioReducer, initialAudioData);

  function handlePlay(track: any): void {
    dispatch({ type: EAudio.PLAY, data: track });
  }
  function handlePause(): void {
    dispatch({ type: EAudio.PAUSE });
  }
  function handleStop(): void {
    dispatch({ type: EAudio.STOP });
  }

  return (
    <AudioContext.Provider
      value={{ audioData, handlePlay, handlePause, handleStop }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export { AudioContext, AudioContextProvider };
