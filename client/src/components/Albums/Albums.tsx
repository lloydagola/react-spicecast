import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Album from "src/components/Album/Album";

import { API_ENDPOINT_URL } from "src/utils/apiUtils";

export default function Albums(): JSX.Element {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    try {
      (async function () {
        const res = await fetch(`${API_ENDPOINT_URL}/albums/test`);
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
    <Box mb={18} mt={6}>
      <Typography
        component="h1"
        color="white"
        fontSize={44}
        fontWeight="700"
        ml={8}
      >
        Albums
      </Typography>
      <Grid
        container
        sx={{
          display: "grid",
          gridGap: "4px",
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {albums.map((album, index) => (
          <Album key={index} album={album} />
        ))}
      </Grid>
    </Box>
  );
}
