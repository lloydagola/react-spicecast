import Box from '@mui/material/Box';
import { TopBar } from './components/TopBar/TopBar';
import { drawerWidth } from 'src/utils/constants';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';

export default function MainLayout({children, setIsClosing,mobileOpen,setMobileOpen, handleDrawerToggle }:any) {
  
  return (
    <Box sx={{ display: 'flex', flexDirection:'column',color:'#fff', 'header': {boxShadow:'1px solid #fff'} }} >     
      <TopBar inViewport={true} handleDrawerToggle={handleDrawerToggle}/>     
      <Box sx={{ display: 'flex', backgroundColor: '#000', color: '#fff', zIndex: '1' }}>
        <SidebarLeft setIsClosing={setIsClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        {children}
        <SidebarRight drawerWidth={drawerWidth} />
      </Box>
    </Box>
  );
}
                                                                                                                                                      