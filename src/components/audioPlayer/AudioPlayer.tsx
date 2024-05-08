
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StopIcon from '@mui/icons-material/Stop';
import { StyledAudioPlayer, StyledTrackTitle, StyledPlayerControls } from './AudioPlayer.styles';

export default function AudioPlayer():JSX.Element{

    return <StyledAudioPlayer id="audio-player">   
                <audio >
                    Your browser does not support the
                    <code>audio</code> element.
                    <source src="${BASE_URL}/${audioState.nowPlaying.path}`}" type="audio/mpeg"/>
                    <source src="http://localhost:4000/music/Xilent/we are dust/01 From Dust.mp3" type="audio/mpeg"/>
                </audio>
                <img src='https://avatars.githubusercontent.com/u/31162324?v=4' alt='thumb'/>
                <StyledTrackTitle>
                    <h4>Lloyd Aagola - Still Waiting</h4>
                </StyledTrackTitle>
                <StyledPlayerControls>
                    <PlayCircleFilledIcon fontSize='large'/>
                    <SkipPreviousIcon fontSize='large'/>
                    <StopIcon fontSize='large'/>
                    <SkipNextIcon fontSize='large'/>
                </StyledPlayerControls>
                <p>00:00</p>
                <progress id="seek-obj" value=".75" max="1" />        
                <p>04:00</p>
            </StyledAudioPlayer> 
}

 

 



