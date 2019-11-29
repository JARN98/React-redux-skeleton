import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Layout, Row, Col } from 'antd';
import Header from '../header';
import Footer from '../footer';
import AuthRouter from '../../router/AuthRouter';
import { isAuth } from '../../../utils';
import NoAuthRouter from '../../router/NoAuthRouter';

const { Content } = Layout;

export default () => (
  <>
    {
      isAuth() ?
        <Layout style={{ height: '100%' }}>
          <Row align='top' >
            <Col span={24}>
              <Layout.Header>
                <Header />
              </Layout.Header>
            </Col>
          </Row>
          <Row align='middle' justify='center' type='flex' style={{ height: '100%' }}>
            <Col span={24}>
              <Content>
                <AuthRouter />
              </Content>
            </Col>
          </Row>
          <Row align='bottom' style={{ position: "absolute", bottom: "0", width: "100%" }}>
            <Col span={24}>
              <Layout.Footer>
                <Footer />
              </Layout.Footer>
            </Col>
          </Row>
        </Layout>
        :
        <Layout style={{ height: '100%' }}>
          <Row align='middle' justify='center' type='flex' style={{ height: '100%' }}>
            <Col span={24}>
              <Content>
                <NoAuthRouter />
              </Content>
            </Col>
          </Row>
        </Layout>
    }
  </>


);
