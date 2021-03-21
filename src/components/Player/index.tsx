import { FiMoreVertical } from 'react-icons/fi';

import {
  Avatar,
  Container,
  Info,
  PlayerContent,
  Name,
  OptionsButton,
} from './styles';

interface PlayerProps {
  name: string;
  info?: string;
}

export const Player = ({ name, info }: PlayerProps) => (
  <Container>
    <PlayerContent>
      <Avatar src={`https://github.com/${name}.png`} alt="player avatar" />
      <div>
        <Name>{name}</Name>
        {info && <Info>{info}</Info>}
      </div>
    </PlayerContent>
    <OptionsButton type="button">
      <FiMoreVertical />
    </OptionsButton>
  </Container>
);
