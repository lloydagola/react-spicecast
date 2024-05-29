import { Outlet } from 'react-router-dom';
import { TopBar } from './components/TopBar/TopBar';
import { useState, useRef } from 'react';
import useInViewPort from '../hooks/useInViewPort';


export default function AppTemplate(): JSX.Element {
  const [isClosing, setIsClosing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const targetRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.1 });
  return (
    <>
      <TopBar inViewport={inViewport} handleDrawerToggle={handleDrawerToggle} />
      <Outlet />
    </>
  );
}
