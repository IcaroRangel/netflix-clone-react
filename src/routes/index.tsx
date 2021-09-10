import React from 'react';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
