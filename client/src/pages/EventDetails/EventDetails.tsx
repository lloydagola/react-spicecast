import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainLayout from "src/layouts/MainLayout";
import { rightDrawerWidth } from "src/utils/constants";
import { useEffect, useState } from "react";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";

export default function EventDetails(): JSX.Element {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      (async function () {
        const response = await fetch(`${API_ENDPOINT_URL}/events/test/${id}`);
        const Event = await response.json();
        setEvent(Event);
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
      <MainLayout>
        <Box
          component="section"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${rightDrawerWidth}px)`, lg: "100%" },
            minHeight: "100vh",
            paddingTop: { xs: "64px", lg: "160px" },
            marginBottom: { md: 12 },
          }}
        >
          {event ? (
            <>
              <Typography variant="h3">{event?.title}</Typography>
              <Box
                className="image-view"
                overflow="hidden"
                position="relative"
                height="100%"
              >
                <img
                  src={event?.thumbnail}
                  alt="event thumbnail"
                  style={{ height: "100%", transition: "transform .5s" }}
                  loading="lazy"
                />
              </Box>
            </>
          ) : (
            <Typography>No EventDetails </Typography>
          )}
        </Box>
      </MainLayout>
    </>
  );
}
