import { useEffect, useRef, useState } from 'react';
import { FaBan } from 'react-icons/fa';
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
  Options,
} from './styles';

interface PlayerProps {
  name: string;
  info?: string;
  showOptions?: boolean;
  isHost?: boolean;
  onKick?: () => void;
  onPromote?: () => void;
}

export const Player = ({
  name,
  info,
  isHost,
  showOptions: showOptionsButton,
  onKick,
  onPromote,
}: PlayerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);

  return (
    <Container ref={ref}>
      {showOptions ? (
        <Options>
          <button
            type="button"
            onClick={() => {
              onKick && onKick();
              setShowOptions(false);
            }}
          >
            <FaBan />
          </button>
          <button
            type="button"
            onClick={() => {
              onPromote && onPromote();
              setShowOptions(false);
            }}
          >
            <RiVipCrownFill />
          </button>
        </Options>
      ) : (
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
      )}
      {showOptionsButton && (
        <OptionsButton
          onClick={() => setShowOptions(!showOptions)}
          type="button"
        >
          <FiMoreVertical />
        </OptionsButton>
      )}
    </Container>
  );
};
