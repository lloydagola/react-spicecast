import Box from '@mui/material/Box'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Typography from '@mui/material/Typography/Typography';

const playListViewStyles = {
    backgroundColor: '#fff',
    overflowX: 'hidden',   
    position: 'absolute',
    zIndex: '100',
    bottom: '0', 
    marginBottom: '16px',
    maxWidth: '80%', 
}


export default function PlaylistView (){    

    return <Box maxWidth='95%' className="playlist-view" sx={playListViewStyles}>
                <Box className="podcast-play" display='flex' flexDirection='row' alignItems='center' p='4px'>
                    <PlayCircleFilledWhiteOutlinedIcon sx={{color:'#222'}}/>
                    <Typography fontWeight={600} className="playing" color="#333" overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' p='8px'>Ep. 109</Typography>                      
                </Box>  
            </Box>
};