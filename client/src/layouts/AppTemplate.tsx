import { Outlet } from 'react-router-dom';
import { TopBar } from './components/TopBar/TopBar';


export default function AppTemplate(): JSX.Element {

  return (
    <>
      <TopBar/>
      <Outlet />
    </>
  );
}
