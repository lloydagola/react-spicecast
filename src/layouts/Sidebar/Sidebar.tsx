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

export default function Sidebar({drawerWidth}:{drawerWidth:number}) {
  return (
    <Box display='flex' width={drawerWidth} pt={15} borderLeft='1px solid #fff' sx={{backgroundColor:'#222'}}>
            <List sx={{display:'flex', flexDirection:'column', backgroundColor:'#222'}}>
                  {['Post', 'Categories', 'Events', 'Radio'].map((text, index) => (
                      <ListItem key={text} >
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
          </Box>
  )
}