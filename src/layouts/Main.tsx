import { useRef, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import AddIcon from '@mui/icons-material/Add';
import RadioIcon from '@mui/icons-material/Radio';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CategoryIcon from '@mui/icons-material/Category';
import IconButton from '@mui/material/IconButton';
import StreamIcon from '@mui/icons-material/Stream';


import SidebarLeft from 'src/layouts/components/SidebarLeft/SidebarLeft';
import Body  from 'src/layouts/components/Body/Body';
import SidebarRight from 'src/layouts/components/SidebarRight/SidebarRight';
import AudioPlayer from 'src/layouts/components/AudioPlayer/AudioPlayer';

import Hero  from 'src/components/Hero/Hero';
import useInViewPort  from 'src/hooks/useInViewPort';


export const drawerWidth = 240;

export default function Layout() {
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  const targetRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.1 });
  
  
  return (
    <Box sx={{ display: 'flex', flexDirection:'column',color:'#fff', 'header': {boxShadow: inViewport ? '1px solid #fff' : 'unset'} }} >
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
            {/* <IconButton /> */}
          </IconButton>
          <ListItemIcon><StreamIcon sx={{color:'#fff',  fontSize:'3rem' }}/></ListItemIcon>
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            marginRight='80px' 
            fontSize={36} 
            fontWeight={900} 
            sx={{
              textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)'
            }}>
             Spice Cast
          </Typography>
          <Box display='flex'>
            <List sx={{display:'flex', flexDirection:'row'}}>
                  {['Post', 'Categories', 'Events', 'Radio'].map((text, index) => (
                      <ListItem key={text} >
                          <ListItemButton>
                              <ListItemIcon>                                
                                {
                                  text === 'Post' ? <AddIcon sx={{color:'#fff', }}/> :
                                  text ==='Categories' ? <CategoryIcon  sx={{color:'#fff'}}/> :
                                  text ==='Events' ? <LocalActivityIcon  sx={{color:'#fff'}}/> :
                                  <RadioIcon  sx={{color:'#fff'}}/> 
                                }                                  
                              </ListItemIcon>
                              <Typography fontSize={22} fontWeight={600} sx={{textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)'}}>{text}</Typography>
                          </ListItemButton>
                      </ListItem>
                  ))}
              </List> 
          </Box>
        </Toolbar>
      </AppBar>

      <Hero/>

      <Box ref={targetRef} sx={{ display: 'flex', backgroundColor:'#000', color:'#fff', zIndex:'1' }} > 
        <SidebarLeft setIsClosing={setIsClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
        <Body drawerWidth={drawerWidth} />  
        <SidebarRight drawerWidth={drawerWidth}/>
      </Box>       

      <AudioPlayer/>   
      
    </Box>
  );
}
                                                                                                                                                      