import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import { router } from "./routes/router";
import { AudioContextProvider } from "./contexts/AudioContext";
import { AppContextProvider } from "./contexts/AppContext";
import AudioPlayer from "./layouts/components/AudioPlayer/AudioPlayer";
import theme from "./theme/theme";

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <AudioContextProvider>
          <Suspense fallback={<h1>loading...</h1>}>
            <RouterProvider router={router} />
          </Suspense>
          <AudioPlayer />
        </AudioContextProvider>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
