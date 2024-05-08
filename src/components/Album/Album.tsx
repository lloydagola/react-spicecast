import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    },

    ".single-album .album-filter" : {
        height: "260px",
        width: "100%",
        position: "absolute",
        zIndex: "5",
        opacity: "0",
        backgroundColor:"tomato",
        transition: ".2s ease-in",
    },

    ".album-horizontal-line" : {
        width: "32px",
        transition: ".2s",
        backgroundColor: "white",
        height: "4px",
    },

    "&.single-album:hover .album-horizontal-line" : {
        width: "60px"
    },

    "&.single-album:hover img" : {
        transform: "scale(1.2)",         
    } ,

    "&.single-album:hover .album-filter" : {
        opacity: ".5",
        transition: ".2s ease-in",
    }
}));

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
            <div className="horizontal-line album-horizontal-line"/>                                            
        </div>  
    </StyledAlbumGrid>
}
