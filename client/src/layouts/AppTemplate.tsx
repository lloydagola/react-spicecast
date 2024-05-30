import { Outlet } from 'react-router-dom';
import { TopBar } from './components/TopBar/TopBar';
import { useState } from 'react';
import useInViewPort from '../hooks/useInViewPort';


export default function AppTemplate(): JSX.Element {


  const {inViewport} = useInViewPort({ threshold: 0.1 });
  return (
    <>
      <TopBar inViewport={inViewport} />
      <Outlet />
    </>
  );
}
