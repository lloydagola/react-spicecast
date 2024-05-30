import Box from '@mui/material/Box';
import MainLayout from 'src/layouts/MainLayout';
import RadioStations from 'src/components/RadioStations/RadioStations';


import { drawerWidth } from 'src/utils/constants';

export default function RadioStationsPage(): JSX.Element {
    return <MainLayout>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: {md: 12} }}
            >            
                <RadioStations/>
            </Box>;
    </MainLayout>
}
