import Box from "@mui/material/Box";
import Podcasts from "src/components/Podcasts/Podcasts";
import MainLayout from "src/layouts/MainLayout";

import { rightDrawerWidth } from "src/utils/constants";

export default function PodcastPage(): JSX.Element {
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
        <Podcasts />
      </Box>
    </MainLayout>
  );
}
