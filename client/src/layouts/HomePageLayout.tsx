import Box from '@mui/material/Box';

import Hero from 'src/components/Hero/Hero';
import { drawerWidth } from 'src/utils/constants';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';

export default function HomePageLayout({children, inViewport,targetRef,setIsClosing,mobileOpen,setMobileOpen }:any) {

  
  return (
    <Box sx={{ display: 'flex', flexDirection:'column',color:'#fff', 'header': {boxShadow: inViewport ? '1px solid #fff' : 'unset'} }} > 
      <Hero />    
      <Box ref={targetRef} sx={{ display: 'flex', backgroundColor: '#000', color: '#fff', zIndex: '1' }}>
        <SidebarLeft />
        {children}
        <SidebarRight/>
      </Box>
    </Box>
  );
}
                                                                                                                                                      