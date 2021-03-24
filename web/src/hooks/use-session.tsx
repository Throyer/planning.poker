import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { io, Socket } from 'socket.io-client';

export interface Player {
  id: string;
  name: string;
  avatar: string;
  isHost: boolean;
}

interface SessionContextData {
  player: Player;
  players: Player[];
  kick: (playerId: string) => void;
}

const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData,
);

interface SessionProviderProps {
  player: Omit<Player, 'id' | 'isHost'>;
  children: ReactNode;
}

export const SessionProvider = ({
  player: { name, avatar },
  children,
}: SessionProviderProps): JSX.Element => {
  const [players, setPlayers] = useState<Player[]>([]);

  const [player, setPlayer] = useState<Player>({
    name: 'unknown',
    avatar: 'unknown',
    id: '0',
    isHost: false,
  });

  const [socket] = useState<Socket>(() => {
    const socket = io('http://localhost:8080/');

    socket.on('all', all => {
      console.count('all');
      setPlayers(all);
    });

    socket.emit('join', {
      name,
      avatar,
    });

    return socket;
  });

  const kick = (playerId: string) => {
    socket.emit('kick', playerId);
  };

  useEffect(() => {
    if (socket) {
      socket.on('new', join => {
        console.count('new');
        setPlayers(state => [...state, join]);
      });

      socket.on('leave', leaveId => {
        console.count('leave');
        setPlayers(state => state.filter(({ id }) => id !== leaveId));
      });

      socket.on('kicked', kickedId => {
        console.count('kicked');
        if (player.id === kickedId) {
          alert('Você foi kickado');
        }
        setPlayers(state => state.filter(({ id }) => id !== kickedId));
      });

      socket.on('player', me => {
        console.count('player');
        setPlayer(me);
      });
    }
  }, [socket, player.id]);

  return (
    <SessionContext.Provider value={{ players, player, kick }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
