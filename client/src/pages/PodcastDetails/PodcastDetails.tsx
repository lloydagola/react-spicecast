import { ReactNode, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MainLayout from "src/layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { AudioContext } from "src/contexts/AudioContext";
import { rightDrawerWidth } from "src/utils/constants";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";
import { TEpisode, TPodcast } from "src/types/types";

const StyledHeroImage = styled.img(({ theme }) => ({
  width: "80%",
  zIndex: 0,
  margin: "auto",
  borderRadius: "32px",
  objectFit: "cover",
  "@media (min-width:480px)": {
    height: "600px",
    width: "100%",
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
      width={{ md: "1080px" }}
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
            p={{ xs: "16px 48px", md: "64px" }}
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
                  margin: "16px",
                  padding: "12px",
                  width: { sm: "160px", md: "160px" },
                  borderRadius: "32px",
                }}
                onClick={() =>
                  handlePlay({
                    ...podcast.episodes[0],
                    thumbnail: podcast.thumbnail,
                  })
                }
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
                  padding: "12px",
                  width: { sm: "160px", md: "160px" },
                  borderRadius: "32px",
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
  handlePlay,
}: {
  episodes: TEpisode[];
  thumbnail: string;
  handlePlay: (track?: any) => void;
}): JSX.Element {
  return (
    <>
      <Box width={{ md: "1080px" }} m="auto">
        <Typography
          variant="h2"
          fontSize="3rem"
          fontWeight={600}
          mt={12}
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
              onClick={() => handlePlay({ ...episode, thumbnail })}
            >
              <Grid item xs={12} md={1}>
                {index + 1}
              </Grid>
              <Grid item xs={12} md={5}>
                {episode.title}
              </Grid>
              <Grid item xs={12} md={3}>
                {episode.date}
              </Grid>
              <Grid item xs={12} md={3}>
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

  const { handlePlay } = useContext(AudioContext);

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
              width: { sm: `calc(100% - ${rightDrawerWidth}px)` },
              minHeight: "100vh",
              paddingTop: { xs: "64px", md: "24px", lg: "160px" },
              marginBottom: { md: 12 },
            }}
          >
            <HeroSection podcast={podcast} handlePlay={handlePlay} />
            <EpisodeList
              episodes={podcast.episodes}
              handlePlay={handlePlay}
              thumbnail={podcast.thumbnail}
            />
          </Box>
        </MainLayout>
      )}
      ;
    </>
  );
}

export default PodcastDetails;
