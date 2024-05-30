import { createContext, useState } from 'react';

type TAppContext = {
  mobileOpen: any;
  setMobileOpen: any;
};

export const AppContext = createContext<any>(null);
export function AppContextProvider({ children }: any) {
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function toggleDrawer(){
    setMobileOpen(!mobileOpen)
  }

  return <AppContext.Provider value={{ mobileOpen, setMobileOpen }}>
    {children}
  </AppContext.Provider>;
}
