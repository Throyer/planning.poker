import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import { Routes } from './routes';
import { SocketIoProvider } from './hooks/use-socket';

export const App = () => (
  <Router>
    <SocketIoProvider>
      <Routes />
      <GlobalStyle />
    </SocketIoProvider>
  </Router>
);
