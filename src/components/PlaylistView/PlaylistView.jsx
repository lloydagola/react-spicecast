import './styles.css'; 
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';



export default function PlaylistView (){    

    return <div className="playlist-view">
                <div className="podcast-play">
                    <PlayCircleFilledWhiteOutlinedIcon sx={{color:'#222'}}/>
                    <p className="playing">As it happened</p>                       
                </div>  
            </div>
};