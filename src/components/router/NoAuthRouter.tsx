import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { isAuth } from '../../utils';
import PATH from '../../utils/constants/path';


interface Props extends RouteProps {
  auth: any;
}

const NoAuthRouters: React.FunctionComponent<Props> = props => {
  const { auth, children, ...rest } = props;

  return <Route {...rest} render={() => (!isAuth() ? children : <Redirect to={PATH.HOME} />)} />;
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(memo(NoAuthRouters));
