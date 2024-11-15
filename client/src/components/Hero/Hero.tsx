import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

import StreamIcon from "@mui/icons-material/Stream";
import styled from "@emotion/styled";

const StyledHeroSection = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FDD832",
  aspectRatio: "1.666667",

  img: {
    position: "absolute",
    zIndex: "0",
    borderRadius: "32px",
  },
  "& img:nth-child(1)": {
    width: "70%",

    "@media (max-width: 480px)": {
      width: "80%",
      top: "7%",
    },
  },
  "& img:nth-child(2)": {
    width: "100%",
    position: "fixed",
    top: 0,

    "@media (max-width: 480px)": {},
  },
  svg: {
    fontSize: "3rem",

    "@media (min-width: 480px)": {
      fontSize: "8rem",
    },
  },
  h1: {
    fontWeight: "900",
    fontSize: "4rem",

    "@media (min-width: 480px)": {
      fontSize: "6rem",
    },
    "@media (min-width: 1080px)": {
      fontSize: "10rem",
    },
  },
  h2: {
    fontWeight: "400",
    fontSize: "2rem",

    "@media (min-width: 480px)": {
      fontSize: "4rem",
    },
    "@media (min-width: 1080px)": {
      fontSize: "6rem",
    },
  },
}));

export default function Hero() {
  return (
    <StyledHeroSection component="section">
      <img src="./images/hero-14.png" alt="foreground" loading="lazy" />
      <img src="./images/hero-12.png" alt="foreground" loading="lazy" />
      <Box position="absolute" textAlign="center">
        <ListItemIcon>
          <StreamIcon sx={{ color: "#fff", fontSize: "8rem" }} />
        </ListItemIcon>
        <Typography variant="h1">LunarFM</Typography>
        <Typography variant="h2">It's outta this world</Typography>
      </Box>
    </StyledHeroSection>
  );
}
