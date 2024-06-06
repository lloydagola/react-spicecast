import React from "react";
import Box from "@mui/material/Box";
import MainLayout from "src/layouts/MainLayout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { rightDrawerWidth } from "src/utils/constants";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import styled from "@emotion/styled";

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
  hosts = [""],
  thumbnail = "",
}: {
  title: string;
  hosts: string[];
  thumbnail: string;
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
              height: "600px",
              objectFit: "cover",
            }}
          />
          <Box
            position="absolute"
            width="100%"
            zIndex={3}
            display="flex"
            flexDirection="column"
            p={{ xs: "16px", md: "64px" }}
          >
            <Typography zIndex={3} fontSize="2rem" fontWeight={600}>
              {hosts.join(", ")}
            </Typography>
            <Typography
              variant="h2"
              zIndex={3}
              fontSize="8rem"
              fontWeight={600}
              lineHeight={0.9}
              width={800}
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

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  th: {
    color: "#fff",
  },
  td: {
    color: "#fff",
    borderBottom: "none",
    padding: "24px",
  },
}));

function EpisodeList(): JSX.Element {
  function createData(
    number: number,
    title: string,
    hosts: string[],
    time: string,
    date: string
  ) {
    return { number, title, hosts, time, date };
  }

  const rows = [
    createData(0, "Frozen yoghurt", ["David Orchard"], "45:12", "06/06/2024"),
    createData(
      1,
      "Ice cream sandwich",
      ["David Orchard"],
      "45:12",
      "06/06/2024"
    ),
    createData(
      2,
      "Eclair",
      ["David Orchard", "Lozario Jimenez"],
      "45:12",
      "06/06/2024"
    ),
    createData(3, "Cupcake", ["David Orchard"], "45:12", "06/06/2024"),
    createData(4, "Gingerbread", ["David Orchard"], "45:12", "06/06/2024"),
  ];

  return (
    <Box width={{ md: "1080px" }} m="auto">
      <Typography variant="h2" fontSize="3rem" fontWeight={600} mt={12} mb={4}>
        Playlist
      </Typography>
      <StyledTableContainer sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Hosts</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Date Posted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.number}</TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.hosts.join(", ")}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
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
          marginBottom: { md: 12 },
        }}
      >
        <Box>
          <Typography variant="h2" fontSize="3rem" fontWeight={600}>
            Trending
          </Typography>
        </Box>
        <HeroSection
          title="The Only One"
          hosts={["David Orchard"]}
          thumbnail="/images/hero-0.jpg"
        />
        <EpisodeList />
      </Box>
    </MainLayout>
  );
}

export default PodcastDetails;
