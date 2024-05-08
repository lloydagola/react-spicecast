

import Button from '@mui/material/Button';

import './App.css';

import Main from './layouts/Main';

function App() {
  return (
    <Main>
      <header className="App-header">
        <Button variant="contained">Contained</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Main>
  );
}

export default App;
