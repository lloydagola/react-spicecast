import styled from '@emotion/styled';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import StopIcon from '@mui/icons-material/Stop';

const StyledAudioPlayer = styled.section(({ theme }) => ({
    backgroundColor: "#333",
    border: "1px solid #333",
    display: "flex",
    position: "fixed",
    bottom: "0",
    zIndex: "10000000",
    cursor: "pointer",
    alignItems: "center",
    flexDirection: "row",
    color: "#fff",
    padding: "0 5%",
    caretColor: "transparent",
    width:'100%',

    'img':{
        height: "60px",
        width: "60px",
        borderRadius: "48%",
        backgroundSize: "cover",
        margin: "4px",
    },

    'progress':{
        width: "50%",
        margin: "0 16px",
        border: "none",
        WebkitAppearance:'none',
        appearance: "none",
        backgroundColor: "white",
        color: "blue",
        height: "2px",
    },

    'p':{
        fontSize:'1.2rem'
    },
   
}));

const StyledPlayerControls = styled.div(({theme}) => ({
    display: "grid",
    gridTemplateColumns:" repeat(4, 1fr)",
    alignItems: "center",
    width: "250px",
}))

const StyledTrackTitle = styled.div(() => ({
    width: "400px",
    margin: "0 20px",
    textOverflow: "ellipsis",
    whiteSpace:"nowrap",
    overflow: "hidden",   
    display: "block", 

     'h4':{
        textOverflow: "ellipsis",
        overflow: "hidden",
        margin: "0",
    }
}))


function AudioPlayer():JSX.Element{

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

export default AudioPlayer;

 



