import { AudioContextProvider } from './contexts/AudioContext';
import Main from './layouts/Main';


function App() {
 
  return (
    <AudioContextProvider>
      <Main/>
    </AudioContextProvider>
  );
}

export default App;
