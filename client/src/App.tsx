import { RouterProvider } from 'react-router-dom';

import { AudioContextProvider } from './contexts/AudioContext';
import AudioPlayer from './layouts/components/AudioPlayer/AudioPlayer';
import { router } from './routes/router';
import { createContext, useContext, useState } from 'react';

type TAppContext = {
  mobileOpen:any;
  setMobileOpen:any;
}

export const AppContext = createContext<any>(null);

function AppContextProvider({children}: any){
      const [isClosing, setIsClosing] = useState(false);
      const [mobileOpen, setMobileOpen] = useState(false);

  return <AppContext.Provider value={{mobileOpen, setMobileOpen}}>
    {children}
  </AppContext.Provider>
}

function App() {
  return (
    <AppContextProvider>
      <AudioContextProvider>  
        <RouterProvider router={router} />
        <AudioPlayer/>
      </AudioContextProvider>
    </AppContextProvider>
  );
}

export default App;
