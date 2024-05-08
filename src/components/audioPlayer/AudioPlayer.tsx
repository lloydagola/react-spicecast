
import { useRef } from 'react';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StopIcon from '@mui/icons-material/Stop';
import { StyledAudioPlayer, StyledTrackTitle, StyledPlayerControls } from './AudioPlayer.styles';

type TCurrent = {

}


export default function AudioPlayer():JSX.Element{
    const player = useRef<HTMLAudioElement>(null);
    
    const handlePlay = () => {

        if (player?.current?.paused === false) {
            player?.current?.pause();
            
        }
        else {
            player?.current?.play();  
        }
    }

     const handleStop = () => {
        player?.current?.pause();
    }

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
                    <PlayCircleFilledIcon fontSize='large' onClick={() => handlePlay()}/>
                    <SkipPreviousIcon fontSize='large'/>
                    <StopIcon fontSize='large' onClick={() => handleStop()}/>
                    <SkipNextIcon fontSize='large'/>
                </StyledPlayerControls>
                <p>00:00</p>
                <progress id="seek-obj" value=".75" max="1" />        
                <p>04:00</p>
            </StyledAudioPlayer> 
}

 

 



