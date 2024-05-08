import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';

import { drawerWidth } from '../Main/Main';
import { Profile } from '../../components/Profile/Profile';

type TNavTypes = {
    setIsClosing: Dispatch<SetStateAction<boolean>>;
    setMobileOpen: Dispatch<SetStateAction<boolean>>;
    mobileOpen: boolean;
};

export function Navigation({ setIsClosing, setMobileOpen, mobileOpen }: TNavTypes): JSX.Element {



    const drawer = (
        <div>
            <Toolbar><Profile/></Toolbar>
            <Divider />
            <List>
                {['Feed', 'New Shows'].map((text, index) => (
                    <ListItem key={text} >
                        <ListItemButton>
                            <ListItemIcon>
                               
                               {text === 'Feed' ? <AutoAwesomeMotionOutlinedIcon /> : <ExploreOutlinedIcon />}
                                
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Favorites', 'History', 'Listen Later', 'Playlists'].map((text, index) => (
                    <ListItem key={text} >
                        <ListItemButton>
                            <ListItemIcon>
                               {
                                text === 'Favorites' ? <FavoriteBorderOutlinedIcon /> 
                                : text==='History' ? <HistoryOutlinedIcon/> 
                                : text==='Listen Later' ? <UpdateOutlinedIcon/> 
                                : <FormatListBulletedOutlinedIcon />
                                }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
           <ListItem >
                        <ListItemButton>
                            <ListItemIcon>
                               <WhatshotSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Trending" />
                        </ListItemButton>
                    </ListItem>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    //const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    return <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
    >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
            //container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop:'66px' },
            }}
            open
        >
            {drawer}
        </Drawer>
    </Box>;

}
