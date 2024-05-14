import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type TalbumType = {
    title: string;
    artist: string;
    index: number;
    thumbnail:string;
}

type TAlbumPropTypes = {
    album:TalbumType
};

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

    ".album-filter" : {
        height: "260px",
        width: "100%",
        position: "absolute",
        zIndex: "5",
        opacity: "0",
        backgroundColor:"tomato",
        transition: ".2s ease-in",
    },

    ".horizontal-line" : {
        width: "32px",
        transition: ".2s",
        backgroundColor: "white",
        height: "4px",
    },

    "&:hover .horizontal-line" : {
        width: "60px"
    },

    "&:hover img" : {
        transform: "scale(1.2)",         
    } ,

    "&:hover .album-filter" : {
        opacity: ".5",
        transition: ".2s ease-in",
    }
}));



export default function Album({album}:TAlbumPropTypes)  {

    return <StyledAlbumGrid item flexDirection="column" > 
                <Box overflow="hidden" height="260px">
                    <Box className="album-filter"/>
                    <img src={album.thumbnail} alt='album thumbnail'/> 
                </Box>         
                <Box sx={{backgroundColor:'#111'}}>
                    <Typography variant="h5">{album.title}</Typography>
                    <Typography>{album.artist}</Typography>
                    <Box className="horizontal-line"/>                                            
                </Box>  
            </StyledAlbumGrid>
}
