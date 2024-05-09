import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import PlaylistView from "../PlaylistView/PlaylistView";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaylistView from '../PlaylistView/PlaylistView';

import { TPodcast } from 'src/types/types';


type TPodcastProps = {
    podcast: TPodcast
}

const podcastStyles = {
        cursor:'pointer',
        '&: hover':{
            img:{
                transform: 'scale(1.2)'
            },
            '.horizontal-line': {
                width: '60px',
            },
            '.filter':{
                backgroundColor: 'rgba(0, 0, 0, 0)',
            }
        }
    }

export default function Podcast ({podcast}:TPodcastProps): JSX.Element{
       
    return <Grid container height="240px" alignItems='center' overflow='hidden' position='relative' className="single-podcast" sx={podcastStyles}> 
            <Box className="image-view" overflow='hidden' position='relative' height='100%'>
                <Box position='absolute' zIndex={100} mt={2} ml={2}>
                    <Typography variant='h4' fontSize={20} fontWeight={900} textOverflow='ellipsis' overflow='hidden'>{podcast.title}</Typography>                    
                </Box> 
                <Box  
                    className='filter'
                    height='100%' 
                    width='100%' 
                    position='absolute' 
                    zIndex='1' 
                    sx={{backgroundColor:'rgba(0, 0, 0, 0.4)', transition: '.5s ease-in-out'}} 
                />
                <img src = {`./images/th-${podcast.index}.jpg`} alt="podcast thumbnail" style={{height:'100%', transition:'transform .5s'}}/>                                            
            </Box>  

            <PlaylistView />  

            <Box className='contributors' bottom='67px' m='8px' position='absolute' zIndex='100'>
                <Typography mt={2}>Lily Claw | Emma Watts</Typography>
                <Box className="horizontal-line podcast-horizontal-line white-background" width='32px' height='4px' sx={{transition: '.2s ease-in-out', backgroundColor: '#fff'}} />
            </Box>
               
            <Box position="absolute" zIndex="100" display="flex" flexDirection="column" right="0"> 
                <FacebookIcon fontSize="small" sx={{color:'#fff', margin:'8px'}}/>
                <InstagramIcon fontSize="small" sx={{color:'#fff', margin:'8px'}}/>
                <GitHubIcon fontSize="small" sx={{color:'#fff', margin:'8px'}}/> 
            </Box>                 
    </Grid>
}
                   
        


