
import { useRef, useEffect, useState } from 'react';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';

import { StyledAudioPlayer, StyledTrackTitle, StyledPlayerControls } from './AudioPlayer.styles';


export default function AudioPlayer():JSX.Element{
    const player = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLProgressElement>(null)

    const [progressValue, setProgressValue] = useState(0);
    const [currentTime, setCurrentTime] = useState('0');
    const [trackDuration, setTrackDuration] = useState('0');
    const [playState, setPlayState] = useState(false);

    //const togglePlayButton = playState => playState === 'playing' ? 'fas fa-pause pause-icon' : 'far fa-play-circle play-icon'

    const updateProgressBar = ():number => {
        if(player.current){
            return player.current.currentTime / player.current.duration;
        }

        return 0;
    }

    const calculateTotalValue = (trackDuration:number = 0):string => {
        if(player.current && player.current.duration){
            let minutes = Math.floor( trackDuration / 60),
              seconds_int = player?.current?.duration - minutes * 60,
              seconds_str = seconds_int < 10 ? '0' + seconds_int.toString() : seconds_int.toString(),
              seconds = seconds_str.substr(0, 2),
              time = minutes + ':' + seconds     
          
            return time;
        }

        return '0';
    }
      
    const calculateCurrentValue = (currentTime:number):string => {
        let current_hour = (currentTime / 3600) % 24,
          current_minute = (currentTime / 60) % 60,
          current_seconds_long = currentTime % 60,
          current_seconds = parseInt(current_seconds_long.toFixed()),
          current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
                
        return current_time;
    }
    
    const handlePlay = ():void => {
        if (player?.current?.paused === false) {
            player?.current?.pause();
            setPlayState(false);           
        }
        else {
            player?.current?.play();  
            setPlayState(true);
        }
    }

    const handleStop = ():void => {
        if(player.current){
            setProgressValue(0);
            setPlayState(false);
            player.current.load();
        }
    }

    const seek = (e:React.MouseEvent<HTMLProgressElement>) => {
        console.log(progressBarRef.current);
        console.log(e)
        if(progressBarRef.current && player.current){
            const percent = e.nativeEvent.offsetX / progressBarRef.current.offsetWidth;
            player.current.currentTime = percent * player.current.duration;
            setProgressValue(percent / 100);
        }        
    }

    useEffect(() => {
        if(player.current)
            console.log(player.current.duration)
    }, [])
    

    useEffect(() => {
        if(player.current){
            player.current.onloadedmetadata = () => {
                if(player.current){
                    setTrackDuration(calculateTotalValue(player.current.duration));
                }
            };                 
            player.current.ontimeupdate = e => {
                if(player.current){
                    setCurrentTime(calculateCurrentValue(player.current.currentTime));
                    setProgressValue(updateProgressBar());
                }
            }
        }
    }, [progressValue]);

    return <StyledAudioPlayer id="audio-player">   
                <audio  ref={player}>
                    Your browser does not support the
                    <code>audio</code> element.
                    <source src="./chill.mp3" type="audio/mpeg"/>
                </audio>
                <img src='./images/th-15.jpg' alt='thumb'/>
                <StyledTrackTitle>
                    <h4>Lloyd Aagola - Still Waiting</h4>
                </StyledTrackTitle>
                <StyledPlayerControls>
                    {
                        playState 
                        ? <PauseIcon fontSize='large' onClick={() => handlePlay()}/>
                        : <PlayCircleFilledIcon fontSize='large' onClick={() => handlePlay()}/> 
                    }
                    <SkipPreviousIcon fontSize='large'/>
                    <StopIcon fontSize='large' onClick={() => handleStop()}/>
                    <SkipNextIcon fontSize='large'/>
                </StyledPlayerControls>
                <p>{player?.current?.currentTime}</p>
                <progress id="seek-obj" value={progressValue || 0} max="1" ref={progressBarRef} onClick={seek}/>        
                <p>{trackDuration}</p>
            </StyledAudioPlayer> 
}

 

 



