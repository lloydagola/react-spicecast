import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainLayout from 'src/layouts/MainLayout';


import { drawerWidth } from 'src/utils/constants';

const MusicInMyMind = () => {
  return (
    <Box>
        <Box component='section'   pl={24} pr={24}>
            <h1>MUSIC IN MY MIND EP</h1>
        </Box>
        <Grid container  pl={24} pr={24}>
            <Grid item lg={4} pr="32px" justifyContent='right'>
                <Box component='div' display='flex' flexDirection='column' justifyContent='right'>
                    <p>Robokid Sonic Records • #RKID492 • November 5, 2016</p>
                    <img src="https://placehold.co/300x300" alt="Album Cover" />
                </Box>      
            </Grid>
            <Grid item lg={8} pr="32px">
                <div>
                    <div>
                        <button>Add to cart</button>
                        <button>Buy from Beatport</button>
                    </div>
                    <div>
                        <div>
                        <p>MUSIC IN MY MIND (ORIGINAL MIX)</p>
                        <button>Beatport</button>
                        </div>
                        <div>
                        <p>PANDA BOY (ORIGINAL MIX)</p>
                        <button>1,50$</button>
                        </div>
                        <div>
                        <p>FUNKY WORLD (ORIGINAL MIX)</p>
                        <button>1,50$</button>
                        </div>
                        <div>
                        <p>SONIK (ORIGINAL MIX)</p>
                        <button>iTunes</button>
                        </div>
                        <div>
                        <p>SONIK (MIMI RMX)</p>
                        <button>2$</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                    <span>Sonik</span> is the final original track on Music In My Mind EP, and seems to find a medium in-between <span>Funky World</span>.
                    </p>
                    <p>
                    The track opens with loose staccato beats and synths before the incredibly catchy lead sample comes in, <span>non stop, we take it up / put to the pedal to the floor we take it up / more noise wake them up / from the back to the front we wake them up</span>. The sample carries strong Daft Punk elements to its altering pitch and tone as the song progresses. <span>Kranke</span> features groove-EDM producer Tom Stars, and his influences can be heard nicely meshing with Knife Party’s.
                    </p>
                    <p>
                    <span>Sonik</span> is the best track on the EP, a hugely energetic track that leaves one hoping for more Knife Party collaborations.
                    </p>
                </div>
                <div>
                    <iframe title='video' src="https://www.youtube.com/embed/VIDEO_ID" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Grid>            
        </Grid>
        <Box component='section'>
            <Box sx={{backgroundColor:'#3E0663'}}>
                    <h2>YOU MAY ALSO LIKE</h2>
                    <Grid display='grid' gridTemplateColumns='repeat(4, 1fr)' gap={2} padding={16}>
                        <img src="https://placehold.co/150x150" alt="Album 1" style={{width: '100%'}}/>
                        <img src="https://placehold.co/150x150" alt="Album 2" style={{width: '100%'}}/>
                        <img src="https://placehold.co/150x150" alt="Album 3" style={{width: '100%'}}/>
                        <img src="https://placehold.co/150x150" alt="Album 4" style={{width: '100%'}}/>
                    </Grid>
            </Box>           
            <Grid display='grid' gridTemplateColumns='repeat(4, 1fr)' sx={{backgroundColor:'#061328'}} padding={16}>
                <Box component='div'>
                    <h3>LATEST RELEASES</h3>
                    <ul>
                    <li>RAINBOW EP - deep / edm / house</li>
                    <li>JUST YOU EP - edm / electro / tech-house</li>
                    <li>LET'S DANCE EP - edm / electro / house</li>
                    <li>IN THE END EP - deep / edm / electro</li>
                    <li>THE RAINBOW EP - edm / electro / house</li>
                    </ul>
                </Box>
                <Box component='div'>
                    <h3>CHARTS</h3>
                    <ul>
                    <li>MIAMI 2018 CHART - Dance / House / Sortie Chart</li>
                    <li>LONDON WEEK CHART - Dance Monthly Chart Official</li>
                    <li>TOP DANCE 2018 - Dance / Jazz / Love Music / Sortie</li>
                    <li>MIAMI 2018 CHART - Electro / House / Sortie Chart</li>
                    <li>MUSIC FOR DANCE CHART - Dance House / Love Music / Sortie</li>
                    </ul>
                </Box>
                <Box component='div'>
                    <h3>GIGS</h3>
                    <ul>
                    <li>SPRING BREAK CAMP 2018 - Festival</li>
                    <li>NEON DESERT 2018 - Festival</li>
                    <li>EDC FESTIVAL - Festival</li>
                    <li>CLUB OPENING - Club</li>
                    <li>LOVE OPEN AIR - Festival</li>
                    </ul>
                </Box>
                <Box component='div'>
                    <h3>Search</h3>
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
            <p>COPYRIGHT <a href="http://quantumthemes.com">QUANTUM THEMES</a></p>
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
            </Box>;
    </MainLayout>
}
