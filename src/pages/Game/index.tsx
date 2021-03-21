import { Sidebar } from '../../components/Sidebar';
import { Navbar } from '../../components/Navbar';
import { Cards } from '../../components/Cards';

import { Container, Main } from './styles';

export const Game = () => (
  <Container>
    <Sidebar />
    <Main>
      <Navbar />
      <Cards />
    </Main>
  </Container>
);
