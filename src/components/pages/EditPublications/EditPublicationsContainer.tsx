import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import EditPublicationsComponent from './EditPublicationsComponent';
import { Form, Icon } from 'antd';

interface MatchParams {
  id?: string;
}

export interface State {
  edit: boolean;
}
export interface Props extends RouteComponentProps<MatchParams> {
  form: any;
}

class EditPublicationsContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.match.params.id ? this.setState({ edit: true }) : this.setState({ edit: false });
  }

  render() {
    return (
      <>
        {
          this.state !== null ?
            <Form style={{ width: '100%', height: '100%' }}>
              <EditPublicationsComponent form={this.props.form} edit={this.state.edit} />
            </Form>
            :
            <Icon type="loading" style={{ fontSize: 24 }} spin />
        }
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

