import { RefObject, useEffect, useRef, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AddIcon from '@mui/icons-material/Add';
import RadioIcon from '@mui/icons-material/Radio';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CategoryIcon from '@mui/icons-material/Category';
import IconButton from '@mui/material/IconButton';


import SidebarLeft from 'src/layouts/components/SidebarLeft/SidebarLeft';
import Body  from 'src/layouts/components/Body/Body';
import SidebarRight from 'src/layouts/components/SidebarRight/SidebarRight';
import AudioPlayer from 'src/layouts/components/AudioPlayer/AudioPlayer';
import zIndex from '@mui/material/styles/zIndex';


export const drawerWidth = 240;

interface IPropTypes {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}


function Hero1() {
  
  const heroStyles = {
    width:'100vw', 
    height:'70vh', 
    display:'flex',
    flexDirection:'column', 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundImage:"url('./images/hero-14.png')",
    backgroundAttachment:'fixed',

    'img':{
      width: "100%",
      marginTop: "241px",
      position: 'fixed',
      zIndex: '0'
    }
  };
  
  return (
    <Box component='section' sx={heroStyles}>
        <img src='./images/hero-12.png' alt='foreground' />
        <Box position='absolute' textAlign='center'>
          <Typography variant='h1' fontWeight={900} fontSize={140}>SpiceCast</Typography>
          <Typography variant='h2' fontWeight={400} fontSize={80}>The Spice To Life</Typography>
        </Box>
      </Box>
  )
}
function Hero2() {
  
  const heroStyles = {
    width:'100vw', 
    height:'65vh', 
    display:'flex',
    flexDirection:'column', 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundImage:"url('./images/hero-7.jpg')",
    backgroundAttachment:'fixed'
  };

  return (
    <Box component='section' sx={heroStyles}>
        <Typography variant='h1' fontWeight={900} fontSize={140}>Hello Spicy</Typography>
        <Typography variant='h2' fontWeight={400} fontSize={80}>The Spice To Life</Typography>
      </Box>
  )
}

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [ inViewport, setInViewport ] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([ entry ]) => {
      setInViewport(entry.isIntersecting);
    }, options);
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ options, ref ]);
  return inViewport;
};



export default function Layout({window}: IPropTypes) {
  
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const targetRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.1 });

  console.log({inViewport});
  
  return (
    <Box sx={{ display: 'flex', flexDirection:'column', backgroundColor:'#000', color:'#fff', 'header': {boxShadow: inViewport ? '1px solid #fff' : 'unset'} }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`, md:'100%' },
          ml: { sm: `${drawerWidth}px` },
          zIndex: {md: '100000'},
          backgroundColor: inViewport ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0)', 
          transition: '.2s ease-in-out'     
        }}
      >
        <Toolbar sx={{justifyContent:'center'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <IconButton />
          </IconButton>
          <Typography variant="h6" noWrap component="div" marginRight='80px'>
             Spice Cast
          </Typography>
          <Box display='flex'>
            <List sx={{display:'flex', flexDirection:'row'}}>
                  {['Post', 'Categories', 'Events', 'Radio'].map((text, index) => (
                      <ListItem key={text} >
                          <ListItemButton>
                              <ListItemIcon>                                
                                {
                                  text === 'Post' ? <AddIcon sx={{color:'#fff'}}/> :
                                  text ==='Categories' ? <CategoryIcon  sx={{color:'#fff'}}/> :
                                  text ==='Events' ? <LocalActivityIcon  sx={{color:'#fff'}}/> :
                                  <RadioIcon  sx={{color:'#fff'}}/> 
                                }                                  
                              </ListItemIcon>
                              <ListItemText primary={text} />
                          </ListItemButton>
                      </ListItem>
                  ))}
              </List> 
          </Box>
        </Toolbar>
      </AppBar>

      <Hero1/>

        <Box ref={targetRef} sx={{ display: 'flex', backgroundColor:'#000', color:'#fff', zIndex:'1' }} >
          
      <div ref={targetRef} ></div>
          <SidebarLeft setIsClosing={setIsClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
          <Body drawerWidth={drawerWidth} />  
          <SidebarRight drawerWidth={drawerWidth}/>
        </Box>

      <AudioPlayer/>   
      
    </Box>
  );
}
