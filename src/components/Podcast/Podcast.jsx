import Typography from '@mui/material/Typography';
//import PlaylistView from "../PlaylistView/PlaylistView";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./style.css";
import PlaylistView from '../PlaylistView/PlaylistView';




export default function Podcast ({podcast}){
       
    return <div className="single-podcast"> 
            <div className="image-view">
                <div className = "podcast-text">
                    <h4>{podcast.title}</h4>
                    
                </div> 
                <div className="filter"/>
                <img src = {`./images/th-${podcast.index}.jpg`} alt="podcast thumbnail"/>                                            
            </div>  

            <PlaylistView />  

            <div className='contributors'>
                <Typography mt={2}>Lily Claw | Emma Watts</Typography>
                <div className="horizontal-line podcast-horizontal-line white-background"/>
            </div>
               
            <div className="social-links"> 
                <FacebookIcon fontSize="small" sx={{color:'#fff', margin:'8px'}}/>
                <InstagramIcon fontSize="small" sx={{color:'#fff', margin:'8px'}}/>
                <GitHubIcon fontSize="small" sx={{color:'#fff', margin:'8px'}}/> 
            </div>                 
    </div>
}
                   
        


