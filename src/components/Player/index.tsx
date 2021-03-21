import { FiMoreVertical } from 'react-icons/fi';
import { RiVipCrownFill } from 'react-icons/ri';

import {
  Avatar,
  Container,
  Info,
  PlayerContent,
  Name,
  OptionsButton,
  Crown,
} from './styles';

interface PlayerProps {
  name: string;
  info?: string;
  showOptions?: boolean;
  isHost?: boolean;
}

export const Player = ({ name, info, showOptions, isHost }: PlayerProps) => (
  <Container>
    <PlayerContent>
      <Avatar>
        <img src={`https://github.com/${name}.png`} alt="player avatar" />
        {isHost && (
          <Crown title="Host">
            <RiVipCrownFill title="host" />
          </Crown>
        )}
      </Avatar>
      <div>
        <Name>{name}</Name>
        {info && <Info>{info}</Info>}
      </div>
    </PlayerContent>
    {showOptions && (
      <OptionsButton type="button">
        <FiMoreVertical />
      </OptionsButton>
    )}
  </Container>
);
