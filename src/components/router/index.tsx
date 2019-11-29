import React, { memo } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import LoginContainer from '../pages/login/LoginContainer';
import AuthRouters from './AuthRouter';
import NoAuthRouters from './NoAuthRouter';
import MainRouters from './MainRouter'

interface Props { }

const Routers: React.FunctionComponent<Props> = () => {
  return (
    <Router>
      <Switch>
        <NoAuthRouters exact path="/login" children={<LoginContainer />} />
        <AuthRouters exact path="/dashboard" children={<MainRouters />} />

        <Route path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
};

export default memo(Routers);