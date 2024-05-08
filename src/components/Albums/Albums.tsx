import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";

import Album from 'src/components/Album/Album';

function renderAlbums(){
    const albums = [];
    for(let i=0; i < 16; i++ ){
        albums.push(<Grid item><Album key={i} i={i}/></Grid>)
    }

    return albums;
}


export default function Albums() {

    return <Box mb={18} mt={18}>
                <Typography component="h1" color="white" fontSize={44} fontWeight="700" ml={8}>Albums</Typography>
                <Grid 
                    container
                    sx={{
                        display: "grid",
                        gridGap: "1px",
                        gridTemplateColumns: "repeat(auto-fill, 300px)",
                        justifyContent: "center",
                        margin:"auto",
                    }}>
                    {renderAlbums()}        
                </Grid>
            </Box>
}