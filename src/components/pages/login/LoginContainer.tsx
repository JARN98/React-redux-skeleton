import React, { Component, ReactNode } from 'react';
import LoginComponent from './LoginComponent';
import { Form, Row } from 'antd';
import './Login.css';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { login, logout } from '../../../redux/actions/authAction';
import { useHistory } from "react-router-dom";

interface Props {
  form: any;
  login: Function;
  logout: Function;
  history: any;
}
interface State { }

class LoginContainer extends Component<Props, State> {

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.login(values).then(() => {
          this.props.history.push('/dashboard');
        }).catch((e: any) => console.log(e))
      }
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <Row align='middle' justify='center' type='flex' style={{ height: '100%' }}>
          <Form className="login-form" onSubmit={this.onSubmit} style={{ width: '100%' }}>
            <LoginComponent form={this.props.form} />
          </Form>
        </ Row>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({});

const WrappedLoginContainer = Form.create<Props>({ name: 'login' })(LoginContainer);

export default withRouter(
  connect(
    mapStateToProps,
    { logout, login }
  )(WrappedLoginContainer)
);
