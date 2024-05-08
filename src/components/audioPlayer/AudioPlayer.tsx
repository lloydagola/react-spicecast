import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StopIcon from '@mui/icons-material/Stop';

import './styles.css';

export default function AudioPlayer(){

    return <section id="audio-player" className="audio-player">   
                <audio >
                    Your browser does not support the
                    <code>audio</code> element.
                    <source src="${BASE_URL}/${audioState.nowPlaying.path}`}" type="audio/mpeg"/>
                    <source src="http://localhost:4000/music/Xilent/we are dust/01 From Dust.mp3" type="audio/mpeg"/>
                </audio>
                <img src='https://avatars.githubusercontent.com/u/31162324?v=4' alt='thumb'/>
                <div className="audio-title">
                    <h4>audioState.nowPlaying.parent.title - audioState.nowPlaying.title</h4>
                </div>
                <div className="player-controls">
                    <PlayCircleFilledIcon/>
                    <SkipPreviousIcon/>
                    <StopIcon/>
                    <SkipNextIcon/>
                </div>
                <p>currentTime</p>
                <progress id="seek-obj" value=".75" max="1" />        
                <p>trackDuration</p>
            </section> 

}

 



