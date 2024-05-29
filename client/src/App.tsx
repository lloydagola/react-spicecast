import { AudioContextProvider } from './contexts/AudioContext';
import Home from './pages/Home/Home';


function App() {
 
  return (
    <AudioContextProvider>
      <Home/>
    </AudioContextProvider>
  );
}

export default App;
