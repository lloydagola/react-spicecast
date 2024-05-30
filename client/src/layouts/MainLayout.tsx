import { ReactNode} from 'react';
import Box from '@mui/material/Box';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';

type TMainLayoutProps = {
  children: ReactNode[];
 
}

export default function MainLayout({children }:TMainLayoutProps) {  
  
  return (
    <Box sx={{ display: 'flex', flexDirection:'column',color:'#fff' }} >             
      <Box sx={{ display: 'flex', backgroundColor: '#000', color: '#fff', zIndex: '1' }}>
        <SidebarLeft />
        {children}
        <SidebarRight/>
      </Box>
    </Box>
  );
}
                                                                                                                                                      