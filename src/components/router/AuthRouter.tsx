import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, RouteProps } from 'react-router-dom';

import { isAuth } from '../../utils';
import { connect } from 'react-redux';

interface Props extends RouteProps {
  auth: any;
}

const AuthRouters: React.FunctionComponent<Props> = props => {
  const { auth, children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() =>
        isAuth() ? (
          <>
            {children}
          </>
        ) : (
            <Redirect to={'/login'} />
          )
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(React.memo(AuthRouters));
