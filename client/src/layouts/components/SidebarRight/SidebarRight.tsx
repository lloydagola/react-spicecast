import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import RadioIcon from '@mui/icons-material/Radio';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CategoryIcon from '@mui/icons-material/Category';
import styled from '@emotion/styled';

import { drawerWidth } from 'src/utils/constants';

const StyledSidebarRight = styled(Box)(({theme})=> ({
  width:drawerWidth,
  display: 'flex',
  backgroundColor:'#000', 
  marginTop: '80px',
  borderLeft:'1px solid #222'
}));

export default function SidebarRight() {
  return (
    <StyledSidebarRight>
            <List sx={{display:'flex', flexDirection:'column'}}>
                  {['Post', 'Categories', 'Events', 'Radio'].map((text, index) => (
                      <ListItem key={index} >
                          <ListItemButton>
                              <ListItemIcon>                                
                                {
                                  text === 'Post' ? <AddIcon  sx={{color:'#fff'}} /> :
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
          </StyledSidebarRight>
  )
}
