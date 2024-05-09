import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";

import Album from 'src/components/Album/Album';

import albumsdata from 'src/_mocks_/data/albums.json'

export default function Albums(): JSX.Element {

    return <Box mb={18} mt={18}>
                <Typography component="h1" color="white" fontSize={44} fontWeight="700" ml={8}>Albums</Typography>
                <Grid 
                    container
                    sx={{
                        display: "grid",
                        gridGap: "4px",
                        gridTemplateColumns: "repeat(auto-fill, 300px)",
                        justifyContent: "center",
                        margin:"auto",
                    }}>
                    {albumsdata.map((album, index) => <Album key={index} album={album} />)}        
                </Grid>
            </Box>
}