import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainLayout from 'src/layouts/MainLayout';


import { drawerWidth } from 'src/utils/constants';
import Typography from '@mui/material/Typography';

function TrackRow({title, artist}:{title:string, artist:string}){

    return <Box pb={4} borderBottom='1px solid #111' alignItems='center' sx={{cursor:'pointer', padding:'12px 16px', '&:hover':{backgroundColor:'#111'}}} display='flex'>
                <PlayCircleOutlinedIcon sx={{ color: '#fff', fontSize: '2rem',  marginRight:'16px'  }} />
                <Box display='flex' flexDirection='column' flex={1}>
                    <Typography>{title}</Typography>
                    <Typography fontWeight={900}>{artist}</Typography>
                </Box> 
                <FavoriteBorderIcon sx={{ color: '#fff', fontSize: '1.4rem', marginRight:'16px' }} />
                <MoreVertIcon sx={{ color: '#fff', fontSize: '1.4rem' }} />
            </Box>
};

const MusicInMyMind = () => {
  return (
    <Box>
        <Box component='section' display='flex' alignItems='center' justifyContent='center' height='30vh' overflow='hidden' position='relative'>
            <Box style={{
                position:'absolute', 
                background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 1))", 
                zIndex:2,
                height:'100%', 
                width:'100%',
            }}/>
            <img src="/images/album-4.jpg" alt="album art" style={{position:'fixed', zIndex:0, width:'100%'}}/>
            <Typography variant='h2' zIndex={3} fontWeight={900}>MUSIC IN MY MIND EP</Typography>
        </Box>
        <Grid container  p='64px 128px' position='relative' sx={{backgroundColor:'#000'}}>
            <Grid item xs={12} lg={3} pr="32px" justifyContent='right'>
                <Box component='div' display='flex' flexDirection='column' justifyContent='right'>
                    <img src="/images/album-4.jpg" alt="Album Cover" />
                    <Typography pt={4}>Robokid Sonic Records • #RKID492 • November 5, 2016</Typography>
                     <Grid container pt={1} gap={.5}>
                        <Button variant='outlined'>EDM</Button>
                        <Button variant='outlined'>House</Button>
                        <Button variant='outlined'>Tech House</Button>
                    </Grid>
                </Box>      
            </Grid>
            <Grid item xs={12} lg={9} pr="32px"  position='relative' zIndex='2'>
                <Box borderBottom='4px solid #fff' borderTop='4px solid #fff' pt={4} pb={4}>
                    <Grid container gap={.5}>
                        <Button variant='outlined'>Play All</Button>
                        <Button variant='outlined'>Save As Playlist</Button>
                    </Grid>
                    <Box pt={4}>
                        <TrackRow title="MUSIC IN MY MIND (ORIGINAL MIX)" artist="Lloyd Agola"/>
                        <TrackRow title="PANDA BOY (ORIGINAL MIX)" artist="Lloyd Agola"/>
                        <TrackRow title="SONIK (ORIGINAL MIX)" artist="Lloyd Agola"/>
                        <TrackRow title="FUNKY WORLD (ORIGINAL MIX)" artist="Lloyd Agola"/>
                        <TrackRow title="SONIK (MIMI RMX)" artist="Lloyd Agola"/>
                    </Box>
                </Box>
                <Box  pt={4} pb={4}>
                    <Typography style={{textAlign:'justify'}}>
                        <Box component='span'>Sonik</Box> is the final original track on Music In My Mind EP, and seems to find a medium in-between <span>Funky World</span>.
                    </Typography>
                    <Typography>
                        The track opens with loose staccato beats and synths before the incredibly catchy lead sample comes in, <span>non stop, we take it up / put to the pedal to the floor we take it up / more noise wake them up / from the back to the front we wake them up</span>. The sample carries strong Daft Punk elements to its altering pitch and tone as the song progresses. <span>Kranke</span> features groove-EDM producer Tom Stars, and his influences can be heard nicely meshing with Knife Party’s.
                    </Typography>
                    <Typography>
                        <Box component='span'>Sonik</Box> is the best track on the EP, a hugely energetic track that leaves one hoping for more Knife Party collaborations.
                    </Typography>
                </Box>
                <Box>
                    <iframe style={{width:'100%'}} height="315" src="https://www.youtube.com/embed/Heqb3W8Jw_E?si=vC6MY65iHzIYOvTz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
                </Box>
            </Grid>            
        </Grid>
        <Box component='section'  position='relative'>
            <Box sx={{backgroundColor:'#3E0663'}}>
                    <Typography variant='h5' style={{marginTop:0, padding:'32px'}}>YOU MAY ALSO LIKE</Typography>
                    <Grid display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2} padding={16}>
                        <img src="/images/album-1.jpg" alt="Album 1" style={{width: '100%'}}/>
                        <img src="/images/album-2.jpg" alt="Album 2" style={{width: '100%'}}/>
                        <img src="/images/album-3.jpg" alt="Album 3" style={{width: '100%'}}/>
                        <img src="/images/album-5.jpg" alt="Album 4" style={{width: '100%'}}/>
                    </Grid>
            </Box>           
            <Grid display='grid' gridTemplateColumns='repeat(4, 1fr)' sx={{backgroundColor:'#061328'}} padding={16}>
                <Box component='div'>
                    <Typography variant='h5'>LATEST RELEASES</Typography>
                    <ul>
                        <li>RAINBOW EP - deep / edm / house</li>
                        <li>JUST YOU EP - edm / electro / tech-house</li>
                        <li>LET'S DANCE EP - edm / electro / house</li>
                        <li>IN THE END EP - deep / edm / electro</li>
                        <li>THE RAINBOW EP - edm / electro / house</li>
                    </ul>
                </Box>
                <Box component='div'>
                    <Typography variant='h5'>CHARTS</Typography>
                    <ul>
                        <li>MIAMI 2018 CHART - Dance / House / Sortie Chart</li>
                        <li>LONDON WEEK CHART - Dance Monthly Chart Official</li>
                        <li>TOP DANCE 2018 - Dance / Jazz / Love Music / Sortie</li>
                        <li>MIAMI 2018 CHART - Electro / House / Sortie Chart</li>
                        <li>MUSIC FOR DANCE CHART - Dance House / Love Music / Sortie</li>
                    </ul>
                </Box>
                <Box component='div'>
                    <Typography variant='h5'>GIGS</Typography>
                    <ul>
                        <li>SPRING BREAK CAMP 2018 - Festival</li>
                        <li>NEON DESERT 2018 - Festival</li>
                        <li>EDC FESTIVAL - Festival</li>
                        <li>CLUB OPENING - Club</li>
                        <li>LOVE OPEN AIR - Festival</li>
                    </ul>
                </Box>
                <Box component='div'>
                    <Typography variant='h5'>Search</Typography>
                    <ul>
                        <li>SPRING BREAK CAMP 2018 - Festival</li>
                        <li>NEON DESERT 2018 - Festival</li>
                        <li>EDC FESTIVAL - Festival</li>
                        <li>CLUB OPENING - Club</li>
                        <li>LOVE OPEN AIR - Festival</li>
                    </ul>
                </Box>
            </Grid>
            <Box component='div'>
                <Typography>COPYRIGHT <a href="http://lloydagola.online">LLOYD AGOLA</a></Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default function AlbumDetails(): JSX.Element {
    return <MainLayout>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: {md: 12} }}
            >            
                <MusicInMyMind/>
            </Box>
    </MainLayout>
}
