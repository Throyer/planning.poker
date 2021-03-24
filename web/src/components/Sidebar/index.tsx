import { Player as PlayerData, useSession } from '../../hooks/use-session';
import { Player } from '../Player';

import { Container, Players, Me } from './styles';

interface SidebarProps {
  players: PlayerData[];
  me?: PlayerData;
}

export const Sidebar = ({ players, me }: SidebarProps) => {
  const { kick } = useSession();
  return (
    <Container>
      <Players>
        {/* {players.map(player => (
          <pre key={player.id} style={{ fontSize: '8px' }}>
            {JSON.stringify(player, null, 4)}
          </pre>
        ))} */}
        {players.map(({ name, avatar, isHost, id }) => (
          <Player
            key={id}
            name={name}
            avatar={avatar}
            isHost={isHost}
            showOptions={me?.isHost}
            info="Mesma info pra todos esses putos"
            onKick={() => kick(id)}
          />
        ))}
      </Players>
      {me && (
        <Me>
          <Player
            name={me.name}
            avatar={me.avatar}
            info="Mesma info pra todos esses putos"
            isHost={me.isHost}
          />
        </Me>
      )}
    </Container>
  );
};
