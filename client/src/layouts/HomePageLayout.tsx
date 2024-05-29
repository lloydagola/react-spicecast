import { ReactNode, useRef, useState } from 'react';

import Box from '@mui/material/Box';



import AudioPlayer from 'src/layouts/components/AudioPlayer/AudioPlayer';

import useInViewPort  from 'src/hooks/useInViewPort';
import { TopBar } from './components/TopBar/TopBar';
import Hero from 'src/components/Hero/Hero';
import { drawerWidth } from 'src/utils/constants';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';

export default function HomePageLayout({children}:{children:ReactNode}) {
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
      <TopBar inViewport={inViewport} handleDrawerToggle={handleDrawerToggle}/> 
      <Hero />    
      <Box ref={targetRef} sx={{ display: 'flex', backgroundColor: '#000', color: '#fff', zIndex: '1' }}>
        <SidebarLeft setIsClosing={setIsClosing} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        {children}
        <SidebarRight drawerWidth={drawerWidth} />
      </Box>
      <AudioPlayer/> 
    </Box>
  );
}
                                                                                                                                                      