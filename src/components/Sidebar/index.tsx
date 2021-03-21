import { Container, Players, Me } from './styles';

import { Player } from '../Player';

const players = ['Lucas', 'christianmsousa', 'thiagosanrocha'];

export const Sidebar = () => (
  <Container>
    <Players className="fela">
      {players.map(name => (
        <Player
          key={name}
          name={name}
          info="Mesma info pra todos esses putos"
          showOptions
        />
      ))}
    </Players>
    <Me>
      <Player name="Throyer" info="Mesma info pra todos esses putos" isHost />
    </Me>
  </Container>
);
