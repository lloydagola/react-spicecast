import Box from '@mui/material/Box';
import { TopBar } from './components/TopBar/TopBar';
import { drawerWidth } from 'src/utils/constants';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import { ReactNode, Dispatch, SetStateAction } from 'react';

type TMainLayoutProps = {
  children: ReactNode[];
  setIsClosing: Dispatch<SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  handleDrawerToggle: () => void; 
}

export default function MainLayout({children, setIsClosing,mobileOpen,setMobileOpen, handleDrawerToggle }:TMainLayoutProps) {
  
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
                                                                                                                                                      