import { Route, Switch } from 'react-router-dom';

import { Game } from '../pages/Game';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Game} />
  </Switch>
);
