import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TitleProvider } from './context/TitlesContext';
import Routes from './routes';
import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <TitleProvider>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </TitleProvider>
  );
}

export default App;
