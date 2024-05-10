import Box from '@mui/material/Box';
import Albums from 'src/components/Albums/Albums';
import Podcasts from 'src/components/Podcasts/Podcasts';
import RadioStations from 'src/components/RadioStations/RadioStations';


export type TBodyTypes = {drawerWidth:number}

export default function Body({ drawerWidth }: TBodyTypes): JSX.Element {
    return <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >               
                <Albums/>
                <RadioStations/>
                <Podcasts/>
            </Box>;
}
