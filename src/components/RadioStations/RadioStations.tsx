
import { useContext } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RadioStation from 'src/components/RadioStation/RadioStation';

import { AudioContext } from 'src/contexts/AudioContext';
import { TRadioStation } from 'src/types/types';


export default function RadioStations (): JSX.Element{

    const {audioData:{radioStations}} = useContext(AudioContext);

    const radioStationStyles = {
        backgroundImage:"url('/images/hero-11.jpg')",
        backgroundAttachment: 'fixed'
    }

    return <Box component='section' pt='60px' pb='60px' sx={radioStationStyles}>
                <Typography variant='h2' color='white' m='32px'>Radio Stations</Typography>
                <Grid container gap={1} justifyContent='center' mb='60px'>
                    {
                        radioStations
                        .map((radioStation:TRadioStation, index:number) =><RadioStation key={index} radioStation={radioStation}/> )
                    }        
                </Grid>
            </Box>
};