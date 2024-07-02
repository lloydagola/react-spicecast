import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Event from "src/components/Event/Event";
import MainLayout from "src/layouts/MainLayout";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";
import { rightDrawerWidth } from "src/utils/constants";

type TError = {
  status: Boolean;
  message: String;
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | TError>(null);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    (async function () {
      try {
        const response = await fetch(`${API_ENDPOINT_URL}/events/test`, {
          signal,
        });
        const responseData = await response.json();

        setLoading(false);
        setEvents(responseData);
      } catch (error) {
        setLoading(false);
        console.log("error occurred...events");
        setError({ status: true, message: "Could not fetch events..." });
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <MainLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${rightDrawerWidth}px)` },
          marginTop: { md: 12 },
        }}
      >
        <Box component="section" mb="60px">
          <Typography variant="h2" color="white" m="32px">
            Events
          </Typography>
          <Grid container m="auto" gap={1} justifyContent="center">
            {loading && <div>loading...</div>}
            {events?.length > 1 &&
              events.map((event, index) => (
                <Event event={event} index={index} key={index} />
              ))}
          </Grid>
        </Box>
      </Box>
    </MainLayout>
  );
}
