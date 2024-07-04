import { useRef, useEffect, useState, useContext } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import {
  StyledAudioPlayer,
  StyledTrackTitle,
  StyledPlayerControls,
} from "./AudioPlayer.styles";
import { AudioContext, EAudioState } from "src/contexts/AudioContext";

export default function AudioPlayer(): JSX.Element {
  const player = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLProgressElement>(null);

  const [progressValue, setProgressValue] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [trackDuration, setTrackDuration] = useState("00:00");

  const {
    audioData: {
      audioState: { isPlaying, playState, title, streamUrl, thumbnail },
    },
    handlePlay,
    handleStop,
    handlePause,
  } = useContext(AudioContext);

  const updateProgressBar = (): number => {
    if (player.current) {
      return player.current.currentTime / player.current.duration;
    }

    return 0;
  };

  const calculateTotalValue = (trackDuration: number = 0): string => {
    if (player.current && player.current.duration) {
      let minutes = Math.floor(trackDuration / 60),
        seconds_int = player.current.duration - minutes * 60,
        seconds_str =
          seconds_int < 10
            ? "0" + seconds_int.toString()
            : seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ":" + seconds;

      return time;
    }

    return "00:00";
  };

  const calculateCurrentValue = (currentTime: number): string => {
    if (player.current) {
      const show_hours = player.current.duration / 60 / 60 > 1;

      let current_hour = parseInt(
          Math.floor((currentTime / 3600) % 24).toFixed()
        ),
        formatted_hour = current_hour < 10 ? "0" + current_hour : current_hour,
        current_minute = parseInt(
          Math.floor((currentTime / 60) % 60).toFixed()
        ),
        current_seconds_long = currentTime % 60,
        current_seconds = parseInt(current_seconds_long.toFixed()),
        formatted_time =
          (current_minute < 10 ? "0" + current_minute : current_minute) +
          ":" +
          (current_seconds < 10 ? "0" + current_seconds : current_seconds),
        _formatted_time = `${show_hours ? formatted_hour : ""} ${
          current_minute < 10 ? "0" + current_minute : current_minute
        } : ${current_seconds < 10 ? "0" + current_seconds : current_seconds}`;

      return formatted_time;
    }

    return "00:00";
  };

  const play = (): void => {
    try {
      if (!player.current?.paused || playState === EAudioState.PLAYING) {
        player.current?.pause();
        handlePause && handlePause();
      } else {
        handlePlay({
          title,
          streamUrl,
          thumbnail,
        });
      }
    } catch (error) {
      console.log("something play...");
    }
  };

  const stop = (): void => {
    if (player.current) {
      setProgressValue(0);
      handleStop && handleStop();
      player.current.load();
    }
  };

  const seek = (e: React.MouseEvent<HTMLProgressElement>) => {
    if (progressBarRef.current && player.current) {
      const percent =
        e.nativeEvent.offsetX / progressBarRef.current.offsetWidth;
      player.current.currentTime = percent * player.current.duration;
      setProgressValue(percent / 100);
    }
  };

  function playSomething() {
    try {
      player.current?.load();
      playState === EAudioState.PLAYING && player.current?.play();
    } catch (error) {
      console.log("something happened2...");
    }
  }

  useEffect(() => {
    let ignore = false;

    if (ignore) return;

    playSomething();

    return () => {
      ignore = true;
    };
  }, [streamUrl, playState]);

  useEffect(() => {
    let ignore = false;
    try {
      if (!ignore && playState === EAudioState.PLAYING) {
        player.current?.play();
        return;
      } else if (playState === EAudioState.PAUSED) {
        player.current?.pause();
        return;
      }
    } catch (error) {
      console.log("something happened...");
    }
    return () => {
      ignore = true;
    };
  }, [playState]);

  useEffect(() => {
    let ignore = false;

    try {
      if (!ignore && player.current) {
        player.current.onloadedmetadata = () => {
          if (player.current) {
            setTrackDuration(calculateTotalValue(player.current.duration));
          }
        };
        player.current.ontimeupdate = (e) => {
          if (player.current) {
            setCurrentTime(calculateCurrentValue(player.current.currentTime));
            setProgressValue(updateProgressBar());
          }
        };
      }
    } catch (error) {
      console.log("something happened here...");
    }

    return () => {
      ignore = true;
    };
  }, [progressValue]);

  const isLiveStream = trackDuration.includes("Infinity");

  return (
    <StyledAudioPlayer id="audio-player">
      <audio ref={player}>
        Your browser does not support the
        <code>audio</code> element.
        <source src={streamUrl} type="audio/mpeg" />
      </audio>
      <img src={thumbnail || "./images/th-15.jpg"} alt="thumb" />
      <StyledTrackTitle>
        <h4>{title}</h4>
      </StyledTrackTitle>
      <StyledPlayerControls>
        {playState === EAudioState.PLAYING ? (
          <PauseIcon fontSize="large" onClick={() => play()} />
        ) : (
          <PlayCircleFilledIcon fontSize="large" onClick={() => play()} />
        )}
        <SkipPreviousIcon fontSize="large" />
        <StopIcon fontSize="large" onClick={() => stop()} />
        <SkipNextIcon fontSize="large" />
      </StyledPlayerControls>
      <p>{currentTime}</p>
      <progress
        id="seek-obj"
        value={progressValue || 0}
        max="1"
        ref={progressBarRef}
        onClick={seek}
      />
      <p>{isLiveStream ? "" : trackDuration}</p>
    </StyledAudioPlayer>
  );
}
