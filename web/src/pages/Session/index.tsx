import { useLocation } from 'react-router-dom';
import { SessionProvider } from '../../hooks/use-session';

import { Game } from '../../components/Game';

export const Session = () => {
  const {
    state: { username },
  } = useLocation<{ username: string }>();

  return (
    <SessionProvider
      player={{ name: username, avatar: `https://github.com/${username}.png` }}
    >
      <Game />
    </SessionProvider>
  );
};
