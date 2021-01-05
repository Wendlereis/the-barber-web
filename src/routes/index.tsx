import React from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

import Route from './Route'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin"  component={SignIn} />

        <Route exact path="/signup"  component={SignUp} />

        <Route exact path="/dashboard" component={Dashboard} isPrivate />

        <Redirect to="/signin" />
      </Switch>
    </Router>
  );
}

export default Routes;