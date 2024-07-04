import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import PlaylistView from "src/components/PlaylistView/PlaylistView";
import { TRadioStation } from "src/types/types";

type TRadioStationProps = {
  radioStation: TRadioStation;
};

const radioStationStyles = {
  cursor: "pointer",
  borderRadius: "16px",
  "&: hover": {
    img: {
      transform: "scale(1.2)",
    },
    ".horizontal-line": {
      width: "60px",
    },
    ".filter": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
};

export default function RadioStation({
  radioStation,
}: TRadioStationProps): JSX.Element {
  return (
    <Grid
      item
      alignItems="center"
      overflow="hidden"
      position="relative"
      sx={radioStationStyles}
    >
      <Box
        className="image-view"
        overflow="hidden"
        position="relative"
        height="250px"
      >
        <Box position="absolute" zIndex={100} mt={4} ml={1}>
          <Typography
            variant="h4"
            fontSize={26}
            fontWeight={900}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {radioStation.title}
          </Typography>
        </Box>
        <Box
          className="filter"
          height="100%"
          width="100%"
          position="absolute"
          zIndex="1"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            transition: ".5s ease-in-out",
          }}
        />
        <img
          src={radioStation.thumbnail}
          alt="podcast thumbnail"
          style={{ transition: "transform .5s", width: "100%" }}
          loading="lazy"
        />
      </Box>

      <PlaylistView track={radioStation} />

      <Box
        className="contributors"
        bottom="67px"
        m="8px"
        position="absolute"
        zIndex="100"
      >
        <Typography mt={2}>{radioStation.genre}</Typography>
        <Box
          className="horizontal-line podcast-horizontal-line white-background"
          mt={2}
          width="32px"
          height="4px"
          sx={{ transition: ".2s ease-in-out", backgroundColor: "#fff" }}
        />
      </Box>

      <Box
        position="absolute"
        zIndex="100"
        display="flex"
        flexDirection="column"
        right="0"
      >
        <FacebookIcon fontSize="small" sx={{ color: "#fff", margin: "8px" }} />
        <InstagramIcon fontSize="small" sx={{ color: "#fff", margin: "8px" }} />
        <GitHubIcon fontSize="small" sx={{ color: "#fff", margin: "8px" }} />
      </Box>
    </Grid>
  );
}
