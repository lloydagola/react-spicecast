import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import RadioStation from "src/components/RadioStation/RadioStation";

import { TRadioStation } from "src/types/types";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";
import { MIN_HEIGHT } from "src/utils/constants";

export default function RadioStations({
  start,
  end,
}: {
  start?: number | undefined;
  end?: number | undefined;
}): JSX.Element {
  const [radioStations, setRadioStations] = useState([]);

  useEffect(() => {
    try {
      (async function () {
        const res = await fetch(`${API_ENDPOINT_URL}/radioStations/test`);
        const radioStationData = await res.json();

        console.log("useEffect...");

        if (!start || !end) {
          setRadioStations(radioStationData);
        }
        setRadioStations(radioStationData.slice(start, end));
      })();
    } catch (error) {
      /**
       * @todo: handle error
       */
      console.log(error);
    }
  }, []);

  const radioStationStyles = {
    backgroundImage: "url('/images/backgrounds/background-2.jpg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "1080px",
  };

  return (
    <Box
      component="section"
      pt="60px"
      pb="60px"
      borderTop="1px solid #111"
      borderBottom="1px solid #111"
      sx={radioStationStyles}
    >
      <Typography variant="h2" color="white" m="32px">
        Radio Stations
      </Typography>

      <Grid
        container
        gap={1}
        justifyContent="center"
        mb="60px"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 350px))",
        }}
      >
        {radioStations.map((radioStation: TRadioStation, index: number) => (
          <RadioStation key={index} radioStation={radioStation} />
        ))}
      </Grid>
    </Box>
  );
}
