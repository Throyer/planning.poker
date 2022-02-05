/* eslint-disable object-shorthand */
import { Sidebar } from '../Sidebar';
import { Navbar } from '../Navbar';
import { Cards } from '../Cards';
import { Results } from '../Results';
import { Debug } from '../Debug';

import { Container, Main } from './styles';
import { useSession } from '../../hooks/use-session';

export const Game = () => {
  const { players, player } = useSession();
  return (
    <Container>
      <Sidebar players={players} me={player} />
      <Main>
        <Navbar isHost={player?.isHost} />
        <Cards />
        <Results />
      </Main>
      {/* <Debug
        style={{ marginTop: 60, fontSize: 'xx-small' }}
        data={{ players, player }}
      /> */}
    </Container>
  );
};
