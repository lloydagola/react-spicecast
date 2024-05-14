import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Podcast from '../Podcast/Podcast';

import { AudioContext } from 'src/contexts/AudioContext';
import { TPodcast } from 'src/types/types';


export default function Podcasts (): JSX.Element{

    const {podcasts} = useContext(AudioContext);

    return <Box component='section' mb='60px'>
                <Typography variant='h2' color='white' m='32px'>Podcasts</Typography>
                <Grid container m='auto' gap={1} justifyContent='center'>
                    {
                        podcasts
                        .map((podcast:TPodcast, index:number) => <Grid item><Podcast key={index} podcast={podcast}/></Grid>)}        
                </Grid>
            </Box>
};