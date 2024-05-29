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
import AddIcon from '@mui/icons-material/Add';
import RadioIcon from '@mui/icons-material/Radio';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CategoryIcon from '@mui/icons-material/Category';
import IconButton from '@mui/material/IconButton';
import StreamIcon from '@mui/icons-material/Stream';

import { drawerWidth } from 'src/utils/constants';

type TTopBarProps = {
  inViewport:boolean;
   handleDrawerToggle: () => void; 
}

export function TopBar({ inViewport, handleDrawerToggle }: TTopBarProps): JSX.Element {
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
          transition: '.2s ease-in-out'
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
              {['Post', 'Categories', 'Events', 'Radio'].map((text, index) => (
                <NavLink to='/podcasts' style={{color:'#fff', textDecoration:'none'}}>
                  <ListItem key={index}>
                      <ListItemButton>                        
                        <ListItemIcon>
                          {text === 'Post' ? <AddIcon sx={{ color: '#fff', }} /> :
                            text === 'Categories' ? <CategoryIcon sx={{ color: '#fff' }} /> :
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
