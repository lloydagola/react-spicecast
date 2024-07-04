import { ReactNode, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MainLayout from "src/layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { AudioContext, EAudioState } from "src/contexts/AudioContext";
import { rightDrawerWidth } from "src/utils/constants";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";
import { TEpisode, TPodcast } from "src/types/types";

const StyledHeroImage = styled.img(({ theme }) => ({
  width: "88%",
  zIndex: 0,
  margin: "auto",
  borderRadius: "32px",
  objectFit: "cover",
  "@media (min-width:480px)": {
    height: "500px",
    width: "92%",
  },
  "@media (min-width:1080px)": {
    height: "600px",
    width: "96%",
  },
}));

function HeroSection({
  podcast,
  handlePlay,
}: {
  podcast: TPodcast;
  handlePlay: (track?: any) => void;
}): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      m="auto"
      overflow="hidden"
      position="relative"
    >
      <Box
        style={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(1px)",
          zIndex: 2,
          height: "100%",
          width: "100%",
        }}
      />
      {!podcast.title || !podcast.thumbnail ? (
        <Typography variant="h1">Loading...</Typography>
      ) : (
        <>
          <StyledHeroImage src={podcast.thumbnail} alt="album art" />
          <Box
            position="absolute"
            width="100%"
            zIndex={3}
            display="flex"
            flexDirection="column"
            p={{ xs: "16px 48px", lg: "64px" }}
          >
            <Typography zIndex={3} fontSize="2rem" fontWeight={600}>
              {podcast.hosts.join(", ")}
            </Typography>
            <Typography
              variant="h2"
              zIndex={3}
              fontSize={{ xs: "2.5rem", md: "6rem" }}
              fontWeight={600}
              lineHeight={0.9}
              width={800}
            >
              {podcast.title}
            </Typography>
            <Box zIndex={10}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  margin: { xs: "8px", md: "16px" },
                  padding: { xs: "8px", md: "12px" },
                  width: { xs: "100px", md: "160px" },
                  borderRadius: "28px",
                }}
                onClick={() =>
                  handlePlay({
                    ...podcast.episodes[0],
                    thumbnail: podcast.thumbnail,
                  })
                }
              >
                <PlayCircleOutlineIcon fontSize="large" />
                <Typography flex={1}>Play</Typography>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  margin: { xs: "8px", md: "16px" },
                  padding: { xs: "8px", md: "12px" },
                  width: { xs: "140px", md: "160px" },
                  borderRadius: "28px",
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

function EpisodeList({
  episodes,
  thumbnail,
  playState,
  nowPlaying,
  handlePlay,
  handlePause,
}: {
  episodes: TEpisode[];
  thumbnail: string;
  playState: string;
  nowPlaying: string;
  handlePlay: (track?: any) => void;
  handlePause: any;
}): JSX.Element {
  return (
    <>
      <Box m="auto">
        <Typography
          variant="h2"
          fontSize="3rem"
          fontWeight={600}
          mt={12}
          ml={4}
          mb={4}
        >
          Playlist
        </Typography>
        {episodes.map(
          (episode: TEpisode, index: number): ReactNode => (
            <Grid
              container
              key={index}
              p={{ xs: "16px", md: "40px" }}
              sx={{
                alignItems: "center",
                borderBottom: "1px solid #111",
                cursor: "pointer",
                transition: ".2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#111",
                  transition: ".2s ease-in-out",
                },
                "&:last-child td, &:last-child th": {
                  borderBottom: "1px solid #444",
                },
              }}
              onClick={() =>
                playState === EAudioState.PLAYING &&
                nowPlaying === episode.title
                  ? handlePause()
                  : handlePlay({ ...episode, thumbnail })
              }
            >
              {playState === EAudioState.PLAYING &&
              nowPlaying === episode.title ? (
                <PauseCircleOutlineIcon
                  fontSize="large"
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginRight: "16px",
                  }}
                />
              ) : (
                <PlayCircleOutlineIcon
                  fontSize="large"
                  sx={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginRight: "16px",
                  }}
                />
              )}
              <Grid item xs={1} sm={1}>
                {index + 1}
              </Grid>
              <Grid item xs={8} sm={4}>
                <Typography variant="h4" fontSize={16} fontWeight={600}>
                  {episode.title}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Typography>{episode.date}</Typography>
              </Grid>
              <Grid item xs={5} sm={3}>
                {episode.tags?.join(", ")}
              </Grid>
            </Grid>
          )
        )}
      </Box>
    </>
  );
}

function PodcastDetails(): JSX.Element {
  const { id } = useParams();
  const [podcast, setPodcast] = useState<TPodcast | null>(null);

  const {
    audioData: {
      audioState: { playState, title: nowPlaying },
    },
    handlePlay,
    handlePause,
  } = useContext(AudioContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (async function () {
        const response = await fetch(`${API_ENDPOINT_URL}/podcasts/test/${id}`);
        const podcastData = await response.json();
        setPodcast(podcastData);
      })();
    } catch (error) {
      console.log(
        "an error occurred while attempting to fetch the podcast...",
        error
      );
      /**
       * @todos : handle error
       */
    }
  }, [id]);

  return (
    <>
      {!podcast ? (
        <Typography variant="h2">Loading...</Typography>
      ) : (
        <MainLayout>
          <Box
            component="section"
            sx={{
              flexGrow: 1,
              width: { sm: `calc(100% - ${rightDrawerWidth}px)`, lg: "100%" },
              minHeight: "1920px",
              paddingTop: { xs: "64px", lg: "160px" },
              marginBottom: { md: 12 },
            }}
          >
            <HeroSection podcast={podcast} handlePlay={handlePlay} />
            <EpisodeList
              episodes={podcast.episodes}
              thumbnail={podcast.thumbnail}
              playState={playState}
              nowPlaying={nowPlaying}
              handlePlay={handlePlay}
              handlePause={handlePause}
            />
          </Box>
        </MainLayout>
      )}
      ;
    </>
  );
}

export default PodcastDetails;
