import Box from "@mui/material/Box";
import Albums from "src/components/Albums/Albums";
import Podcasts from "src/components/Podcasts/Podcasts";
import RadioStations from "src/components/RadioStations/RadioStations";
import HomePageLayout from "src/layouts/HomePageLayout";

import { rightDrawerWidth } from "src/utils/constants";

export default function Home(): JSX.Element {
  return (
    <HomePageLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${rightDrawerWidth}px)` },
          minHeight: "1920px",
          marginTop: { md: 12 },
        }}
      >
        <Albums />
        <RadioStations start={0} end={9} />
        <Podcasts />
      </Box>
    </HomePageLayout>
  );
}
