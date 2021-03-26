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
  avatar?: string;
  info?: string;
  showOptions?: boolean;
  isHost?: boolean;
  onKick?: () => void;
  onPromote?: () => void;
}

export const Player = ({
  name,
  avatar,
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
            <img src={avatar} alt="player avatar" />
            {isHost && (
              <Crown title="Host">
                <RiVipCrownFill title="host" />
              </Crown>
            )}
          </Avatar>
          <div>
            <Name title={name}>
              {name.trim().length > 20 ? `${name.slice(0, 23)}...` : name}
            </Name>

            {info && (
              <Info>
                {info.trim().length > 39 ? `${info.slice(0, 39)}...` : info}
              </Info>
            )}
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
