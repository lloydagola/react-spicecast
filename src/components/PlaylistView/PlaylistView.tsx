import { useContext } from 'react';
import Box from '@mui/material/Box'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import PauseIcon from '@mui/icons-material/Pause';
import Typography from '@mui/material/Typography/Typography';

import { AudioContext } from 'src/contexts/AudioContext';

const playListViewStyles = {
    backgroundColor: '#fff',
    overflowX: 'hidden',
    position: 'absolute',
    zIndex: '100',
    bottom: '0', 
    marginBottom: '16px',
    maxWidth: '80%', 
}

//handlePlay={() => handlePlay({nowPlaying: radioStation.title, thumbnail:radioStation.thumbnail, streamUrl:radioStation.streamUrl})}

export default function PlaylistView ({track}: {track?:any}){    
    const {audioData:{audioState:{isPlaying, title}}, handlePlay, handlePause} = useContext(AudioContext); 


    return <Box maxWidth='95%' className="playlist-view" sx={playListViewStyles}>
                <Box className="podcast-play" display='flex' flexDirection='row' alignItems='center' p='4px'>
                    {
                        isPlaying && track.title === title
                        ? <PauseIcon fontSize='large' sx={{color:'#222'}} onClick={() => handlePause && handlePause()}/>
                        : <PlayCircleFilledWhiteOutlinedIcon fontSize='large' sx={{color:'#222'}} onClick={() => handlePlay(track)}/>
                    }                    
                    <Typography fontWeight={600} className="playing" color="#333" overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' p='8px'>Ep. 109</Typography>                      
                </Box>  
            </Box>
};