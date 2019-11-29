import React from 'react';
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

interface Props {
  form: WrappedFormUtils;
}

function LoginComponents(props: Props) {
  const { form } = props
  const { getFieldDecorator } = form;
  return (
    <>
      <Row type='flex' align='middle'>
        <Col span={8}></Col>
        <Col span={8}>
          <Card>
            <h1>Login</h1>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' },
                { type: 'email', message: 'The input is not valid E-mail!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('pass', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  )
}

export default LoginComponents;
