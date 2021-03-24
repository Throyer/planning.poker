import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Join } from '../pages/Join';
import { Session } from '../pages/Session';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/join" component={Join} />
    <Route path="/session" component={Session} />
  </Switch>
);
