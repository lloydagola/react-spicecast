import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RadioStation from '../RadioStation/RadioStation';

import radioStationsData from 'src/_mocks_/data/radioStations.json';
import { TRadioStation } from 'src/types/types';


export default function RadioStations (): JSX.Element{

    const radioStationStyles = {
        backgroundImage:"url('/images/hero-11.jpg')",
        backgroundAttachment: 'fixed'
    }

    return <Box component='section' pt='60px' pb='60px' sx={radioStationStyles}>
                <Typography variant='h2' color='white' m='32px'>Radio Stations</Typography>
                <Grid container gap={1} justifyContent='center' mb='60px'>
                    {
                        radioStationsData
                        .slice(0, 9)
                        .map((radioStation:TRadioStation, index:number) =><RadioStation key={index} radioStation={radioStation}/> )
                    }        
                </Grid>
            </Box>
};