import React from "react";
import Box from "@mui/material/Box";
import MainLayout from "src/layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { rightDrawerWidth } from "src/utils/constants";

function _HeroSection(): JSX.Element {
  return (
    <Box>
      <img
        src="/images/hero-0.jpg"
        alt="Artist"
        style={{ borderRadius: "24px" }}
      />

      <Box position="absolute" zIndex={3}>
        <p>Artist</p>
        <h3>Top all over the world</h3>
        <Box>
          <button>Play</button>
          <button>Follow</button>
        </Box>
      </Box>
    </Box>
  );
}

function HeroSection({
  title = "",
  thumbnail = "",
}: {
  title: string;
  thumbnail: string;
}): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={1080}
      m="auto"
      overflow="hidden"
      position="relative"
    >
      <Box
        style={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
          height: "100%",
          width: "100%",
        }}
      />
      {!title || !thumbnail ? (
        <Typography variant="h1">Loading...</Typography>
      ) : (
        <>
          <img
            src={thumbnail}
            alt="album art"
            style={{
              zIndex: 0,
              margin: "auto",
              borderRadius: "32px",
              width: "100%",
            }}
          />
          <Box
            position="absolute"
            zIndex={3}
            display="flex"
            flexDirection="column"
            p={{ xs: "16px", md: "64px" }}
          >
            <Typography
              variant="h4"
              zIndex={3}
              fontSize="5rem"
              fontWeight={600}
            >
              {title}
            </Typography>
            <Typography
              variant="h2"
              zIndex={3}
              fontSize="12rem"
              fontWeight={600}
            >
              {title}
            </Typography>
            <Box zIndex={10}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  margin: "16px",
                  padding: "16px",
                  width: "160px",
                  borderRadius: "16px",
                }}
              >
                <PlayArrowIcon
                  fontSize="large"
                  onClick={() => console.log("playing podcast...")}
                />
                <Typography flex={1}>Play</Typography>
              </Button>
              <Button
                variant="outlined"
                color="warning"
                sx={{
                  margin: "16px",
                  padding: "16px",
                  width: "160px",
                  borderRadius: "16px",
                }}
              >
                <AddToPhotosIcon
                  fontSize="large"
                  onClick={() => console.log("following podcast...")}
                />
                <Typography flex={1}>Follow</Typography>
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

function PlaylistSection(): JSX.Element {
  return (
    <Box>
      <h3>Playlist</h3>
      <table>
        <thead>
          <tr>
            <th>/images/album-1.jpg</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Sleep 4Ever</td>
            <td>Blackbear</td>
            <td>4:12</td>
            <td>HoneyWorks</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Time is Ticking Out</td>
            <td>The Cranberries</td>
            <td>4:20</td>
            <td>Wake up and Smell the Coffee</td>
          </tr>
          <tr>
            <td>03</td>
            <td>If I were u</td>
            <td>Lauv</td>
            <td>3:12</td>
            <td>The Ecstatic</td>
          </tr>
          <tr>
            <td>04</td>
            <td>One Minute More</td>
            <td>Gun Kelly</td>
            <td>2:56</td>
            <td>Supercell</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}

function PodcastDetails(): JSX.Element {
  return (
    <MainLayout>
      <Box
        component="section"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${rightDrawerWidth}px)` },
          minHeight: "100vh",
          marginTop: { md: 12 },
        }}
      >
        <Box>
          <Typography variant="h2" fontSize="3rem" fontWeight={600}>
            Trending
          </Typography>
        </Box>
        <HeroSection title="Hello" thumbnail="/images/hero-0.jpg" />
        {/* <PlaylistSection /> */}
      </Box>
    </MainLayout>
  );
}

export default PodcastDetails;
