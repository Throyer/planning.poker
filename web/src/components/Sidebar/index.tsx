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
        {players.map(({ name, avatar, isHost, id, bio }) => (
          <Player
            key={id}
            name={name}
            avatar={avatar}
            isHost={isHost}
            showOptions={me?.isHost}
            info={bio}
            onKick={() => kick(id)}
          />
        ))}
      </Players>
      {me && (
        <Me>
          <Player
            name={me.name}
            avatar={me.avatar}
            info={me.bio}
            isHost={me.isHost}
          />
        </Me>
      )}
    </Container>
  );
};
