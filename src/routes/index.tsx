import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>

        <Route path="/signup" exact>
          <SignUp />
        </Route>

        <Redirect to="/signin" />
      </Switch>
    </Router>
  );
}

export default Routes;