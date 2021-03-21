import { FaPlay, FaShareAlt, FaSquare } from 'react-icons/fa';

import { Container } from './styles';

export const Navbar = () => (
  <Container>
    <div>
      <button type="button">
        <FaPlay />
      </button>
      <button type="button">
        <FaSquare />
      </button>
    </div>
    <button type="button">
      <FaShareAlt />
    </button>
  </Container>
);
