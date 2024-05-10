import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RadioStation from '../RadioStation/RadioStation';

import albumdata from 'src/_mocks_/data/albums.json';
import { TPodcast } from 'src/types/types';

function renderPodcasts ():JSX.Element[]{
    return albumdata.slice(0, 9).map((podcast:TPodcast, index:number) =><RadioStation key={index} podcast={podcast}/> )
} 

export default function RadioStations (): JSX.Element{

    return <Box component='section' pt='60px' pb='60px' sx={{backgroundImage:"url('https://demo.pro.radio/wp2/wp-content/uploads/2021/07/pr-background-green.png')"}}>
                <Typography variant='h2' color='white' m='32px'>Radio Stations</Typography>
                <Grid container gap={1} justifyContent='center' mb='60px'>
                    {renderPodcasts()}        
                </Grid>
            </Box>
};