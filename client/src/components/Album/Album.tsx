import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TAlbum } from "src/types/types";
import { NavLink } from "react-router-dom";

type TAlbumPropTypes = {
  album: TAlbum;
  id: number;
};

const StyledAlbumGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexirection: "column",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  borderRadius: "16px",

  a: {
    textDecoration: "none",
  },

  img: {
    transition: "transform .5s",
    width: "100%",
  },

  h5: {
    textOverflow: "ellipsis",
    width: "calc(100%)",
    overflow: "hidden",
    color: "#fff",
  },

  p: {
    margin: "0 0 12px 0",
    color: "#fff",
  },

  ".album-filter": {
    height: "260px",
    width: "100%",
    position: "absolute",
    zIndex: "5",
    opacity: "0",
    backgroundColor: "tomato",
    transition: ".2s ease-in",
  },

  ".horizontal-line": {
    width: "32px",
    transition: ".2s",
    backgroundColor: "white",
    height: "4px",
  },

  "&:hover .horizontal-line": {
    width: "60px",
  },

  "&:hover img": {
    transform: "scale(1.2)",
  },

  "&:hover .album-filter": {
    opacity: ".5",
    transition: ".2s ease-in",
  },
}));

export default function Album({ album, id }: TAlbumPropTypes) {
  return (
    <StyledAlbumGrid item flexDirection="column">
      <NavLink to={`/albums/${id}`}>
        <Box overflow="hidden" height="260px">
          <Box className="album-filter" />
          <img
            src={album.thumbnail}
            alt="album thumbnail"
            loading="lazy"
            style={{
              borderRadius: "16px",
            }}
          />
        </Box>
        <Box sx={{ backgroundColor: "#111" }} p={1}>
          <Typography variant="h5">{album.title}</Typography>
          <Typography>{album.artist}</Typography>
          <Box className="horizontal-line" />
        </Box>
      </NavLink>
    </StyledAlbumGrid>
  );
}
