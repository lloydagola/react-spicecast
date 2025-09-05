import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";

import { AudioContext, EAudioState } from "src/contexts/AudioContext";
import MainLayout from "src/layouts/MainLayout";
import Album from "src/components/Album/Album";
import { MIN_HEIGHT, rightDrawerWidth } from "src/utils/constants";
import { TAlbum, TTrack } from "src/types/types";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";

import albumsData from "src/_mocks_/data/albums.json";

const StyledAlbumImg = styled.img(() => ({
  display: "none",
  "@media(min-width:1080px)": {
    display: "flex",
    borderRadius: "16px",
  },
}));

const StyledContentGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#000",
  padding: "64px 18px",

  img: {
    width: "100%",
    margin: "auto",
  },

  "@media screen &(min-width:480px)": {
    padding: "64px 128px",
  },
}));

const StyledMainContent = styled(Grid)(({ theme }) => ({
  display: "grid",
}));

const StyledRecommendationsSection = styled(Box)(({ theme }) => ({}));

function HeroSection({
  title = "",
  thumbnail = "",
}: {
  title: string;
  thumbnail: string;
}): JSX.Element {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="30vh"
      overflow="hidden"
      position="relative"
    >
      <Box
        style={{
          position: "absolute",
          background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 1))",
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
              position: "fixed",
              zIndex: 0,
              width: "100%",
              margin: "auto",
            }}
          />
          <Typography variant="h2" zIndex={3} fontWeight={900}>
            {title}
          </Typography>
        </>
      )}
    </Box>
  );
}

function TrackRow({
  track: { title, streamUrl, contributingArtists = [] },
  artist,
  thumbnail,
}: {
  track: TTrack;
  artist: string;
  thumbnail: string;
}) {
  const {
    audioData: {
      audioState: { playState, title: nowPlaying },
    },
    handlePlay,
    handlePause,
  } = useContext(AudioContext);

  function togglePlay() {
    if (playState === EAudioState.PLAYING && handlePause) {
      handlePause();
      return;
    }
    handlePlay({ title, thumbnail, streamUrl });
  }

  return (
    <Box
      pb={4}
      borderBottom="1px solid #111"
      alignItems="center"
      sx={{
        cursor: "pointer",
        padding: "12px 16px",
        "&:hover": { backgroundColor: "#111" },
      }}
      display="flex"
    >
      <Box display="flex" flex={1} alignItems="center">
        {playState === EAudioState.PLAYING && nowPlaying === title ? (
          <PauseIcon
            fontSize="large"
            sx={{ color: "#fff", fontSize: "2rem", marginRight: "16px" }}
            onClick={() => handlePause && handlePause()}
          />
        ) : (
          <PlayCircleOutlinedIcon
            fontSize="large"
            sx={{ color: "#fff", fontSize: "2rem", marginRight: "16px" }}
            onClick={() => handlePlay({ title, thumbnail, streamUrl })}
          />
        )}

        <Box display="flex" flexDirection="column">
          <Typography display="inline" fontWeight={900}>
            {artist}
          </Typography>
          <Typography>{title}</Typography> -
          {contributingArtists.length < 1 ? (
            ""
          ) : (
            <Typography>
              <b>Featuring: </b>
              {contributingArtists?.map((contributingArtist, index) =>
                contributingArtists.length > 1 &&
                contributingArtists.length > index + 1
                  ? contributingArtist + ", "
                  : contributingArtist
              )}
            </Typography>
          )}
        </Box>
      </Box>
      <FavoriteBorderIcon
        sx={{ color: "#fff", fontSize: "1.4rem", marginRight: "16px" }}
      />
      <MoreVertIcon sx={{ color: "#fff", fontSize: "1.4rem" }} />
    </Box>
  );
}

function AlbumArt({ thumbnail }: { thumbnail: string }): JSX.Element {
  return (
    <Grid item xs={12} lg={3} pr="32px" justifyContent="right">
      <Box display="flex" flexDirection="column" justifyContent="right">
        <StyledAlbumImg
          src={thumbnail}
          alt="Album Cover"
          style={{ width: "100%" }}
        />
        <Typography pt={4}>
          Robokid Sonic Records • #RKID492 • November 5, 2016
        </Typography>
        <Grid container pt={1} pb={4} gap={0.5}>
          <Button variant="outlined">EDM</Button>
          <Button variant="outlined">House</Button>
          <Button variant="outlined">Tech House</Button>
        </Grid>
      </Box>
    </Grid>
  );
}

function MainContent({ album }: { album: TAlbum }): JSX.Element {
  return (
    <StyledMainContent
      item
      xs={12}
      lg={9}
      pr="32px"
      position="relative"
      zIndex="2"
    >
      <Box borderBottom="2px solid #fff" pt={4} pb={4}>
        {!album ? (
          <Typography variant="h1">Loading...</Typography>
        ) : (
          <>
            <Grid container gap={0.5}>
              <Button variant="outlined">Play All</Button>
              <Button variant="outlined">Save As Playlist</Button>
            </Grid>
            <TrackList
              tracks={album.tracks || []}
              artist={album.artists[0].title || "Unknown Artist"}
              thumbnail={
                album.thumbnail ||
                "https://www.vecteezy.com/vector-art/6056661-music-vector-icon-gramophone-record-symbols-and-musical-notes-isolated-on-a-white-background"
              }
            />
          </>
        )}
      </Box>
      <AlbumDescription description={album.description} />
    </StyledMainContent>
  );
}

function TrackList({
  tracks,
  artist,
  thumbnail,
}: {
  tracks: TTrack[];
  artist: string;
  thumbnail: string;
}): JSX.Element {
  return (
    <Box pt={4}>
      {!tracks ? (
        <Typography variant="h1">No Tracks</Typography>
      ) : (
        tracks.map((track: TTrack, index: number) => (
          <TrackRow
            key={index}
            track={track}
            artist={artist}
            thumbnail={thumbnail}
          />
        ))
      )}
    </Box>
  );
}

function AlbumDescription({
  description,
}: {
  description: string;
}): JSX.Element {
  return (
    <Box pt={4} pb={4}>
      <Typography style={{ textAlign: "justify" }}>{description}</Typography>
      <Box>
        <iframe
          style={{ width: "100%" }}
          height="315"
          src="https://www.youtube.com/embed/Heqb3W8Jw_E?si=vC6MY65iHzIYOvTz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Box>
    </Box>
  );
}

function RecommendedSection(): JSX.Element {
  const [albums, setAlbums] = useState<any>([]);

  useEffect(() => {
    try {
      if (process.env.REACT_APP_MOCK) {
        setAlbums(albumsData);
        return;
      }
      (async function () {
        const res = await fetch(
          `${API_ENDPOINT_URL}/albums/test?start=0&end=4`
        );
        const albumData = await res.json();
        setAlbums(albumData);
      })();
    } catch (error) {
      /**
       * @todo: handle error
       */
      console.log(error);
    }
  }, []);

  return (
    <StyledRecommendationsSection component="section" position="relative">
      <Box sx={{ backgroundColor: "#3E0663" }}>
        <Typography
          variant="h4"
          fontWeight={900}
          style={{ marginTop: 0, padding: "32px" }}
        >
          YOU MAY ALSO LIKE
        </Typography>
        <Grid
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 300px))"
          gap={2}
          padding={{ xs: "16px 16px", md: "48px 32px" }}
          justifyContent="center"
        >
          {albums.map((album: TAlbum, index: number) => (
            <Album album={album} key={index} />
          ))}
        </Grid>
      </Box>
      <Grid
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 300px))"
        sx={{ backgroundColor: "#061328", justifyContent: "center" }}
        padding={{ xs: "16px 16px", md: "48px 64px" }}
      >
        <Box>
          <Typography variant="h5" fontWeight={900}>
            LATEST RELEASES
          </Typography>
          <ul>
            <li>RAINBOW EP - deep / edm / house</li>
            <li>JUST YOU EP - edm / electro / tech-house</li>
            <li>LET'S DANCE EP - edm / electro / house</li>
            <li>IN THE END EP - deep / edm / electro</li>
            <li>THE RAINBOW EP - edm / electro / house</li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={900}>
            CHARTS
          </Typography>
          <ul>
            <li>MIAMI 2018 CHART - Dance / House / Sortie Chart</li>
            <li>LONDON WEEK CHART - Dance Monthly Chart Official</li>
            <li>TOP DANCE 2018 - Dance / Jazz / Love Music / Sortie</li>
            <li>MIAMI 2018 CHART - Electro / House / Sortie Chart</li>
            <li>MUSIC FOR DANCE CHART - Dance House / Love Music / Sortie</li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={900}>
            GIGS
          </Typography>
          <ul>
            <li>SPRING BREAK CAMP 2018 - Festival</li>
            <li>NEON DESERT 2018 - Festival</li>
            <li>EDC FESTIVAL - Festival</li>
            <li>CLUB OPENING - Club</li>
            <li>LOVE OPEN AIR - Festival</li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={900}>
            Search
          </Typography>
          <ul>
            <li>SPRING BREAK CAMP 2018 - Festival</li>
            <li>NEON DESERT 2018 - Festival</li>
            <li>EDC FESTIVAL - Festival</li>
            <li>CLUB OPENING - Club</li>
            <li>LOVE OPEN AIR - Festival</li>
          </ul>
        </Box>
      </Grid>
      <Box>
        <Typography>
          COPYRIGHT <a href="http://lloydagola.online">LLOYD AGOLA</a>
        </Typography>
      </Box>
    </StyledRecommendationsSection>
  );
}

function AlbumContent(): JSX.Element {
  const { id } = useParams();

  const [album, setAlbum] = useState<any>(null);
  const {
    audioData: {
      audioState: { playState, title },
    },
    handlePlay,
    handlePause,
  } = useContext(AudioContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      if (process.env.REACT_APP_MOCK) {
        if (id && albumsData[Number(id)]) {
          setAlbum(albumsData[Number(id) - 1]);
        }
        return;
      }
      (async function () {
        const response = await fetch(`${API_ENDPOINT_URL}/albums/${id}`);
        const AlbumData = await response.json();
        setAlbum(AlbumData.data);
      })();
    } catch (error) {
      console.log("an error occurred", error);
      /**
       * @todos : handle error
       */
    }
  }, [id]);

  return (
    <>
      {!album ? (
        <Typography variant="h2">Loading...</Typography>
      ) : (
        <>
          <HeroSection title={album.title} thumbnail={album.thumbnail} />
          <StyledContentGrid container>
            <AlbumArt thumbnail={album.thumbnail} />
            <MainContent album={album} />
          </StyledContentGrid>
          <RecommendedSection />
        </>
      )}
    </>
  );
}

export default function AlbumDetails(): JSX.Element {
  return (
    <MainLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${rightDrawerWidth}px)` },
          marginTop: { md: 12 },
          minHeight: MIN_HEIGHT,
        }}
      >
        <AlbumContent />
      </Box>
    </MainLayout>
  );
}
