import { useLayoutEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Game } from '../../components/Game';
import { SessionProvider } from '../../hooks/use-session';

interface SessionParams {
  sessionId: string;
  username: string;
  avatar: string;
  bio?: string;
}

export const Session = () => {
  const { state } = useLocation<SessionParams>();

  const history = useHistory();

  const { username, avatar, bio } = state;

  useLayoutEffect(() => {
    if (!state?.username || !state?.avatar || !state.sessionId) {
      history.push('/');
    }
  }, [history, state]);

  return (
    <SessionProvider
      sessionId={state.sessionId}
      player={{ name: username, avatar, bio }}
    >
      <Game />
    </SessionProvider>
  );
};
