import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import General from '../pages/home/GeneralContainer';
import EditPublicationsContainer from '../pages/EditPublications/EditPublicationsContainer';
import PATH from '../../utils/constants/path';
import { Layout } from 'antd';
import Header from '../shared/header';
import Footer from '../shared/footer';

interface Props { }

const MainRouters: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Layout.Header><Header /></Layout.Header>
        <Router>
          <Switch>
            <Route exact path={PATH.HOME} component={General} />
            <Route exact path={PATH.EDIT + '/:id'} children={<EditPublicationsContainer />} />

            <Route path="/" render={() => <Redirect to={PATH.HOME} />} />
          </Switch>
        </Router>
        <Layout.Footer style={{ bottom: 0, right: 0, left: 0, position: 'absolute' }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default memo(MainRouters);