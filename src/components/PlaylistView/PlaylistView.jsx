import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Typography from '@mui/material/Typography/Typography'
import './styles.css'; 



export default function PlaylistView (){    

    return <div className="playlist-view">
                <div className="podcast-play">
                    <PlayCircleFilledWhiteOutlinedIcon sx={{color:'#222'}}/>
                    <Typography fontWeight={600} className="playing">Ep. 109</Typography>                      
                </div>  
            </div>
};