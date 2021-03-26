import { useHistory, useLocation } from 'react-router-dom';
import { SessionProvider } from '../../hooks/use-session';

import { Game } from '../../components/Game';

interface SessionParams {
  username: string;
  avatar: string;
  bio?: string;
}

export const Session = () => {
  const { state } = useLocation<SessionParams>();

  const history = useHistory();

  if (!state || !state.username || !state.avatar) {
    history.push('/');
    return <></>;
  }

  const { username, avatar, bio } = state;

  return (
    <SessionProvider player={{ name: username, avatar, bio }}>
      <Game />
    </SessionProvider>
  );
};
