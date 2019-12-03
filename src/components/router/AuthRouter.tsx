import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { isAuth } from '../../utils';
import { connect } from 'react-redux';
import PATH from '../../utils/constants/path';

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
            <Redirect to={PATH.LOGIN} />
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
