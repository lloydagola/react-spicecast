import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { TEvent } from "src/types/types";

type TEventProps = {
  event: TEvent;
  index: number;
};

const eventStyles = {
  color: "#fff",
  cursor: "pointer",
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

export default function Event({ event, index }: TEventProps): JSX.Element {
  return (
    <Link to={`/events/${index}`}>
      <Grid
        container
        height="420px"
        alignItems="center"
        overflow="hidden"
        position="relative"
        className="single-event"
        sx={eventStyles}
      >
        <Box
          className="image-view"
          overflow="hidden"
          position="relative"
          height="100%"
        >
          <img
            src={event.thumbnail}
            alt="event thumbnail"
            style={{
              height: "100%",
              transition: "transform .5s",
              borderRadius: "16px",
            }}
            loading="lazy"
          />
        </Box>
        <Box
          position="absolute"
          zIndex="100"
          display="flex"
          flexDirection="column"
          right="0"
        >
          <FacebookIcon
            fontSize="small"
            sx={{ color: "#fff", margin: "8px" }}
          />
          <InstagramIcon
            fontSize="small"
            sx={{ color: "#fff", margin: "8px" }}
          />
          <GitHubIcon fontSize="small" sx={{ color: "#fff", margin: "8px" }} />
        </Box>
      </Grid>
    </Link>
  );
}
