import { Container } from './styles';

interface MeProps {
  name: string;
  info?: string;
}

export const Me = ({ name, info }: MeProps) => (
  <Container>
    <h1>{name}</h1>
    <p>{info}</p>
  </Container>
);
