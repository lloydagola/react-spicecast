import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./style.css";

type TAlbumTypes = {
    i:number
}



const StyledAlbumGrid = styled(Grid)(({theme}) => ({
    display: "flex",
    flexirection: "column",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",

    img : { 
        transition: "transform .5s",
        width: "100%",
    },

    h5 : {
        textOverflow: "ellipsis",
        width: "calc(100%)",
        overflow: "hidden",
        margin: "6px 0 0 0",
        color:"#fff",
    },

    p : {
        margin: "0 0 12px 0",
        color:"#fff",
    }


}))

export default function Album({i}:TAlbumTypes)  {

    return <StyledAlbumGrid flexDirection="column" item className="single-album"> 
        <Box overflow="hidden" height="260px">
            <Box className="album-filter"/>
            <img src={`./images/th-${i}.jpg`} alt='album thumbnail'/> 
        </Box>  
        <div className="album-buttons"/>        
        <div className = "album-text">
            <Typography variant="h5">Still Waiting</Typography>
            <Typography>Lloyd Agola</Typography>
            <div className="horizontal-line album-horizontal-line white-background"/>                                            
        </div>  
    </StyledAlbumGrid>
}
