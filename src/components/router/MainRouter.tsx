import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import General from '../pages/home/GeneralContainer';

interface Props { }

const MainRouters: React.FunctionComponent<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={General} />
      </Switch>
    </Router>
  );
};

export default memo(MainRouters);