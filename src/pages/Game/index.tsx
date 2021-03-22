import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';
import { Cards } from '../../components/Cards';
import { Results } from '../../components/Results';

import { Container, Main } from './styles';

export const Game = () => (
  <Container>
    <Sidebar />
    <Main>
      <Navbar isHost />
      <Cards />
      <Results />
    </Main>
  </Container>
);
