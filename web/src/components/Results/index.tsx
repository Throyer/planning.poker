import { Card } from '../Card';

import { Container, ResultGroup, ResultCard, Players } from './styles';

const player = [
  'christianmsousa',
  'thiagosanrocha',
  'manoeldev',
  'thelokys',
  'throyer',
];

export const Results = () => (
  <Container>
    <ResultGroup>
      <Players>
        {player.map(name => (
          <img
            key={name}
            src={`https://github.com/${name}.png`}
            alt="player avatar"
          />
        ))}
      </Players>
      <ResultCard>
        <Card size="sm" value="1/2" />
      </ResultCard>
    </ResultGroup>
  </Container>
);
