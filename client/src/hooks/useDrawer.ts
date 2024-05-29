import { useState } from "react";


export default function useDrawer() {
      const [isClosing, setIsClosing] = useState(false);
      const [mobileOpen, setMobileOpen] = useState(false);
      
      const handleDrawerToggle = ():void => {
        if (!isClosing) {
          setMobileOpen(!mobileOpen);
        }
      };

    return {
        isClosing,
        setIsClosing,
        mobileOpen,
        setMobileOpen,
        handleDrawerToggle
    }
  }
  