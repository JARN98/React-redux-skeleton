import React, { memo } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import LoginContainer from '../pages/login/LoginContainer';
import AuthRouters from './AuthRouter';
import NoAuthRouters from './NoAuthRouter';
import MainRouters from './MainRouter'
import PATH from '../../utils/constants/path';

interface Props { }

const Routers: React.FunctionComponent<Props> = () => {
  return (
    <Router>
      <Switch>
        <NoAuthRouters exact path={PATH.LOGIN} children={<LoginContainer />} />
        <AuthRouters path="/home" children={<MainRouters />} />

        <Route path="/" render={() => <Redirect to={PATH.LOGIN} />} />
      </Switch>
    </Router>
  );
};

export default memo(Routers);