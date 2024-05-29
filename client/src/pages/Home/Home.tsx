import Box from '@mui/material/Box';
import Albums from 'src/components/Albums/Albums';
import Podcasts from 'src/components/Podcasts/Podcasts';
import RadioStations from 'src/components/RadioStations/RadioStations';
import HomePageLayout from 'src/layouts/HomePageLayout';


import { drawerWidth } from 'src/utils/constants';

export default function Home(): JSX.Element {
    return <HomePageLayout>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: {md: 12} }}
            >               
                <Albums/>
                <RadioStations/>
                <Podcasts/>
            </Box>;
    </HomePageLayout>
}
