import { useEffect, useState } from "react";


export default function useDrawer() {
      const [isClosing, setIsClosing] = useState(false);
      const [mobileOpen, setMobileOpen] = useState(true);
      
      const handleDrawerToggle = ():void => {
        console.log({mobileOpen, isClosing})
        setMobileOpen(!mobileOpen);
        if (!isClosing) {
        }
      };

      useEffect(() => {
        console.log({mobileOpen})
      
      }, [mobileOpen])
      
     

    return {
        isClosing,
        setIsClosing,
        mobileOpen,
        setMobileOpen,
        handleDrawerToggle
    }
  }
  