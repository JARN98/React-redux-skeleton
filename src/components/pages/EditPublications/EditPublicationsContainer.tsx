import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import EditPublicationsComponent from './EditPublicationsComponent';
import { Form } from 'antd';

interface MatchParams {
  id?: string;
}

export interface State { }
export interface Props extends RouteComponentProps<MatchParams> {
  form: any;
}

class EditPublicationsContainer extends React.Component<Props, State> {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <Form style={{ width: '100%' }}>
          <EditPublicationsComponent form={this.props.form} />
        </Form>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({});


const WrappedEditPublicationsContainer = Form.create<Props>({ name: 'publication' })(EditPublicationsContainer);

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(WrappedEditPublicationsContainer)
);