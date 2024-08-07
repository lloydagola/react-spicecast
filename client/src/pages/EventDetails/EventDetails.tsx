import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import FestivalIcon from "@mui/icons-material/Festival";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import MainLayout from "src/layouts/MainLayout";
import { MIN_HEIGHT, rightDrawerWidth } from "src/utils/constants";
import { API_ENDPOINT_URL } from "src/utils/apiUtils";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function Details(): JSX.Element {
  return (
    <Box width="100%">
      <Grid container borderBottom="1px solid #333" p={4}>
        <Grid xs={12} md={3} item>
          <Typography fontWeight={600}> Date</Typography>
        </Grid>
        <Grid xs={12} md={8} item>
          September 19, 2022 1:00 am
        </Grid>
      </Grid>
      <Grid container borderBottom="1px solid #333" p={4}>
        <Grid xs={12} md={3} item>
          <Typography fontWeight={600}> Location</Typography>
        </Grid>
        <Grid xs={12} md={8} item>
          Ministry Of Sound
        </Grid>
      </Grid>
      <Grid container borderBottom="1px solid #333" p={4}>
        <Grid xs={12} md={3} item>
          <Typography fontWeight={600}> Address</Typography>
        </Grid>
        <Grid xs={12} md={8} item>
          103 Gaunt St London UK
        </Grid>
      </Grid>
      <Grid container borderBottom="1px solid #333" p={4}>
        <Grid xs={12} md={3} item>
          <Typography fontWeight={600}> Phone</Typography>
        </Grid>
        <Grid xs={12} md={8} item>
          +44 20 7740 8600
        </Grid>
      </Grid>
      <Grid container borderBottom="1px solid #333" p={4}>
        <Grid xs={12} md={3} item>
          <Typography fontWeight={600}> Website</Typography>
        </Grid>
        <Grid xs={12} md={8} item>
          http://club.ministryofsound.com
        </Grid>
      </Grid>
    </Box>
  );
}

function LineUp(): JSX.Element {
  const artists = [
    { thumbnail: "artist-4", name: "J Piercer", time: "4:00PM" },
    { thumbnail: "artist-1", name: "Baron Fury", time: "7:00PM" },
    { thumbnail: "artist-2", name: "Kenny Bass", time: "10:00PM" },
    { thumbnail: "artist-3", name: "Morris Play", time: "12:00PM" },
  ];

  return (
    <>
      {artists.map(({ thumbnail, name, time }, index) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          key={index}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            zIndex={5}
          >
            <Typography variant="h2" fontSize="3rem" fontWeight={600}>
              {name}
            </Typography>
            <Typography fontSize="2rem" fontWeight={400}>
              {time}
            </Typography>
          </Box>
          {/* <Box
        width="100%"
        height="100%"
        position="absolute"
        sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      /> */}
          <Box sx={{ background: "filter(blur)" }}>
            <img
              loading="lazy"
              alt={name}
              src={`/images/artists/${thumbnail}.jpg`}
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      height="100%"
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

function HeroSection({ title }: { title: string }): JSX.Element {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="50vh"
      sx={{
        backgroundImage: "url(/images/backgrounds/background-2.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "contained",
      }}
    >
      <Box
        height="50vh"
        width="100%"
        position="absolute"
        sx={{
          background: "linear-gradient(rgba(0, 0, 0, 0) -100%, rgb(0, 0, 0))",
        }}
      />
      <Typography
        variant="h2"
        fontSize="8rem"
        fontWeight={600}
        textAlign="center"
        position="absolute"
      >
        {title}
      </Typography>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function EventInfo(): JSX.Element {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  //paddingTop: { xs: "64px", lg: "160px" },
  return (
    <Box
      sx={{
        border: "1px solid #444",
        marginTop: "60px",
        borderRadius: "16px",
        width: "calc(100% - 32px)",
        overflow: "hidden",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="event description"
        textColor="secondary"
        indicatorColor="secondary"
        variant="fullWidth"
        sx={{ marginTop: "16px" }}
      >
        <Tab
          icon={<CalendarMonthIcon />}
          iconPosition="start"
          label="Details"
          style={{ color: "#fff" }}
        />
        <Tab
          icon={<QueueMusicIcon />}
          iconPosition="start"
          label="Lineup"
          style={{ color: "#fff" }}
        />
        <Tab
          icon={<FestivalIcon />}
          iconPosition="start"
          label="The Event"
          style={{ color: "#fff" }}
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Details />
          <img
            loading="lazy"
            width="100%"
            alt="map location"
            src="/images/map.png"
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <LineUp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          id="qtvideobg"
          className="qt-videobg hide-on-med-and-down skrollable loaded skrollable-between"
          data-quality="small"
          data-id="f2I2YJ_y-D0"
          data-start="24"
          data-mute="1"
          style={{ opacity: 1 }}
        >
          <Box
            id="ytplayer-container1720024904530"
            className="ytplayer-container background"
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/f2I2YJ_y-D0?si=yA69F4SQZ9hdUrIe&amp;controls=0&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <Typography pt={2} textAlign="justify">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar. The Big Oxmox
              advised her not to do so, because there were thousands of bad
              Commas, wild Question Marks and devious Semikoli, but the Little
              Blind Text didn’t listen. She packed her seven versalia, put her
              initial into the belt and made herself on the way. When she
              reached the first hills of the Italic Mountains, she had a last
              view back on the skyline of her hometown Bookmarksgrove, the
              headline of Alphabet Village and the subline of her own road, the
              Line Lane. Pityful a rethoric question ran over her cheek, then.
            </Typography>
          </Box>
          <Box id="ytplayer-shield" className="ytplayer-shield"></Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}

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
    <MainLayout>
      <Box
        component="section"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${rightDrawerWidth}px)` },
          minHeight: MIN_HEIGHT,
          marginBottom: { md: 12 },
          backgroundAttachment: "fixed",
        }}
      >
        {event ? (
          <>
            <HeroSection title={event.title} />
            <Grid container mb={16}>
              <Grid
                item
                xs={12}
                md={4}
                p={8}
                display="flex"
                flexDirection="column"
                className="image-view"
                overflow="hidden"
                position="relative"
                width="fit-content"
              >
                <img
                  src={event?.thumbnail}
                  alt="event thumbnail"
                  loading="lazy"
                  style={{
                    borderRadius: "16px",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ margin: "16px", borderRadius: "16px" }}
                >
                  Buy Ticket
                </Button>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <FacebookIcon
                    fontSize="small"
                    sx={{ color: "#fff", margin: "8px", cursor: "pointer" }}
                  />
                  <InstagramIcon
                    fontSize="small"
                    sx={{ color: "#fff", margin: "8px", cursor: "pointer" }}
                  />
                  <GitHubIcon
                    fontSize="small"
                    sx={{ color: "#fff", margin: "8px", cursor: "pointer" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <EventInfo />
              </Grid>
            </Grid>
          </>
        ) : (
          <Typography>No EventDetails </Typography>
        )}
      </Box>
    </MainLayout>
  );
}
