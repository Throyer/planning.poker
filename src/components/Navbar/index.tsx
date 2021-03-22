import { FaPlay, FaShareAlt, FaSquare } from 'react-icons/fa';

import { Container } from './styles';

interface NavbarProps {
  isHost?: boolean;
}

export const Navbar = ({ isHost }: NavbarProps) => (
  <Container>
    {isHost && (
      <div>
        <button type="button">
          <FaPlay />
        </button>
        <button type="button">
          <FaSquare />
        </button>
      </div>
    )}
    <button type="button">
      <FaShareAlt />
    </button>
  </Container>
);
