import Box from '@mui/material/Box';
import { TopBar } from './components/TopBar/TopBar';
import { drawerWidth } from 'src/utils/constants';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import useDrawer from 'src/hooks/useDrawer';

type TMainLayoutProps = {
  children: ReactNode[];
 
}

export default function MainLayout({children }:TMainLayoutProps) {
  
  
  return (
    <Box sx={{ display: 'flex', flexDirection:'column',color:'#fff', 'header': {boxShadow:'1px solid #fff'} }} >     
      <TopBar inViewport={true}/>     
      <Box sx={{ display: 'flex', backgroundColor: '#000', color: '#fff', zIndex: '1' }}>
        <SidebarLeft />
        {children}
        <SidebarRight drawerWidth={drawerWidth} />
      </Box>
    </Box>
  );
}
                                                                                                                                                      