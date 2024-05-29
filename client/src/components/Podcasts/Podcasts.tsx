import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Podcast from '../Podcast/Podcast';
import { TPodcast } from 'src/types/types';
import {API_ENDPOINT_URL} from 'src/utils/apiUtils';


export default function Podcasts (): JSX.Element{

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        try {
          (async function() {    
            const response = await fetch(`${API_ENDPOINT_URL}/podcasts/test`);
            const podcastData = await response.json(); 
            
            setPodcasts(podcastData);      
        })();            
        } catch (error) {
            /**
             * @todo: handle error
             */
            console.log(error);           
        };      
    }, []);
    

    return <Box component='section' mb='60px'>
                <Typography variant='h2' color='white' m='32px'>Podcasts</Typography>
                <Grid container m='auto' gap={1} justifyContent='center'>
                    {
                        podcasts
                        .map((podcast:TPodcast, index:number) => <Grid item key={index}><Podcast podcast={podcast}/></Grid>)
                    }        
                </Grid>
            </Box>
};