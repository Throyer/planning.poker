import { Container, Players, Me } from './styles';

import { Player } from '../Player';

const players = [
  'christianmsousa',
  'thiagosanrocha',
  'manoeldev',
  'thelokys',
  'renatohenriqueps',
];

export const Sidebar = () => (
  <Container>
    <Players>
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
