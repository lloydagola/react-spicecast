import Box from "@mui/material/Box";
import Albums from "src/components/Albums/Albums";
import MainLayout from "src/layouts/MainLayout";

import { rightDrawerWidth } from "src/utils/constants";

export default function AlbumPage(): JSX.Element {
  return (
    <MainLayout>
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
      </Box>
    </MainLayout>
  );
}
