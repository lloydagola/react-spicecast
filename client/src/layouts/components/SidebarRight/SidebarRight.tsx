import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import RadioIcon from "@mui/icons-material/Radio";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import CategoryIcon from "@mui/icons-material/Category";

import { rightDrawerWidth } from "src/utils/constants";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const StyledSidebarRight = styled(Box)(({ theme }) => ({
  display: "none",
  width: rightDrawerWidth,
  backgroundColor: "#000",
  zIndex: "3",
  padding: "80px 16px",
  borderLeft: "1px solid #111",
  "@media (min-width:1080px)": {
    display: "flex",
    flexDirection: "column",
  },
}));

function TrackList({ title }: { title: string }): JSX.Element {
  const songs = [
    {
      title: "Saphire",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-1.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Cold Lights",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-1.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Simon Says",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-2.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Open",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-3.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Breathe",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-4.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Focus",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-5.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Hearts",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-6.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "In my head",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-7.jpg",
      genres: ["electro", "trap", "house"],
    },
    {
      title: "Neon Dreams",
      artist: "Lloyd Agola",
      thumbnail: "/images/album-8.jpg",
      genres: ["electro", "trap", "house"],
    },
  ];

  return (
    <Grid
      container
      position="relative"
      gap={0.5}
      height={100}
      style={{ cursor: "pointer" }}
    >
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
      {songs.map(({ title, artist, thumbnail, genres }) => (
        <Grid container>
          <Grid item display="grid" justifyItems="center" alignItems="center">
            <PlayCircleOutlineIcon
              fontSize="large"
              style={{ position: "absolute", margin: "auto" }}
            />
            <img
              width="100px"
              height="100px"
              loading="lazy"
              alt={title}
              src={thumbnail}
            />
          </Grid>
          <Grid item xs={8} pl={2} flex={1} display="grid" alignItems="center">
            <Typography fontWeight={600}>{title}</Typography>
            <Typography>{artist}</Typography>
            <Typography>
              {genres.slice(0, 3).map((genre: string, index: number) => (
                <Box
                  component="span"
                  key={index}
                  style={{
                    backgroundColor: "#FFDE00",
                    color: "#333",
                    marginLeft: "4px",
                    padding: "4px",
                    borderRadius: "6px",
                  }}
                >
                  {genre}
                </Box>
              ))}
            </Typography>
          </Grid>
          <Grid item display="grid" justifyItems="center" alignItems="center">
            <FavoriteBorderIcon
              fontSize="medium"
              style={{ position: "absolute", margin: "auto" }}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default function SidebarRight(): JSX.Element {
  return (
    <StyledSidebarRight>
      <TrackList title="Top Picks" />
      {/* <TrackList title="Trending Songs" /> */}
    </StyledSidebarRight>
  );
}
