import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import RadioIcon from '@mui/icons-material/Radio';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import IconButton from '@mui/material/IconButton';
import StreamIcon from '@mui/icons-material/Stream';

import { drawerWidth } from 'src/utils/constants';
import useDrawer from 'src/hooks/useDrawer';
import useScrollPosition from 'src/hooks/useScrollPosition';


export function TopBar(): JSX.Element {
  const {handleDrawerToggle} = useDrawer();

  const scrollPosition = useScrollPosition();
  const inViewport = scrollPosition > 240;

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`, md: '100%' },
          ml: { sm: `${drawerWidth}px` },
          zIndex: { md: '100000' },
          backgroundColor: inViewport ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0)',
          transition: '.2s ease-in-out',
          boxShadow: inViewport ? '1px solid #fff' : 'unset'
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <ListItemIcon><StreamIcon sx={{ color: '#fff', fontSize: '3rem' }} /></ListItemIcon>  
          <NavLink to='/' style={{color:'#fff', textDecoration:'none'}}>
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
          </NavLink>        
          <Box display='flex'>
            <List sx={{ display: 'flex', flexDirection: 'row' }}>
              {['Albums', 'Podcasts', 'Events', 'RadioStations'].map((text, index) => (
                <NavLink to={`/${text.toLocaleLowerCase()}`} style={{color:'#fff', textDecoration:'none'}}  key={index}>
                  <ListItem>
                      <ListItemButton>                        
                        <ListItemIcon>
                          {text === 'Albums' ? <LibraryMusicIcon sx={{ color: '#fff', }} /> :
                            text === 'Podcasts' ? <PodcastsIcon sx={{ color: '#fff' }} /> :
                              text === 'Events' ? <LocalActivityIcon sx={{ color: '#fff' }} /> :
                                <RadioIcon sx={{ color: '#fff' }} />}
                        </ListItemIcon>
                        <Typography fontSize={22} fontWeight={600} sx={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3), 5px 5px 70px rgba(255, 255, 255, 0.5)' }}>{text}</Typography>            
                      </ListItemButton>
                    </ListItem>
                </NavLink>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
