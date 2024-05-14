import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Podcast from '../Podcast/Podcast';

import albumdata from 'src/_mocks_/data/podcasts.json';
import { TPodcast } from 'src/types/types';

function renderPodcasts ():JSX.Element[]{
    return albumdata.map((podcast:TPodcast, index:number) => <Grid item><Podcast key={index} podcast={podcast}/></Grid> )
} 

export default function Podcasts (): JSX.Element{

    return <Box component='section' mb='60px'>
                <Typography variant='h2' color='white' m='32px'>Podcasts</Typography>
                <Grid container m='auto' gap={1} justifyContent='center'>
                    {renderPodcasts()}        
                </Grid>
            </Box>
};