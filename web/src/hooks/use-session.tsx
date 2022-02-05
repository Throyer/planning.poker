import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSocket } from './use-socket';

export interface Player {
  id: string;
  name: string;
  bio?: string;
  avatar: string;
  isHost: boolean;
}

interface SessionContextData {
  id: string;
  player: Player;
  players: Player[];
  kick: (playerId: string) => void;
}

const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData,
);

interface SessionProviderProps {
  sessionId: string;
  player: Omit<Player, 'id' | 'isHost'>;
  children: ReactNode;
}

export const SessionProvider = ({
  sessionId,
  player: { name, avatar, bio },
  children,
}: SessionProviderProps): JSX.Element => {
  const { socket } = useSocket();

  const [player, setPlayer] = useState<Player>({
    id: '',
    name: '',
    avatar: '',
    isHost: false,
  });

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    socket.on('players', players => {
      console.log(players);
      setPlayers(players);
    });
    socket.on('player', setPlayer);
    socket.on('new', player => setPlayers(old => [...old, player]));
    socket.on('leave', id =>
      setPlayers(oldPlayers => {
        const newStatePlayers = oldPlayers.filter(player => player.id !== id);
        if (newStatePlayers.length === 0) {
          setPlayer(oldPlayer => ({
            ...oldPlayer,
            isHost: true,
          }));
        }
        return newStatePlayers;
      }),
    );

    socket?.emit('join', { sessionId, player: { name, avatar, bio } });
  }, [avatar, bio, name, socket, sessionId]);

  return (
    <SessionContext.Provider
      value={{ id: sessionId, players, player, kick: () => console.log('oi') }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
