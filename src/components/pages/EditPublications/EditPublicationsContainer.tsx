import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import EditPublicationsComponent from './EditPublicationsComponent';
import { Form, Icon } from 'antd';
import { IPublications } from '../../../interfaces';
import { createPublication, getOnePublication, updatePublication } from '../../../redux/actions/publicationAction'
import PATH from '../../../utils/constants/path';

interface MatchParams {
  id?: string;
}

export interface State {
  edit: boolean;
  publication: IPublications;
}

export interface Props extends RouteComponentProps<MatchParams> {
  form: any;
  getOnePublication: Function;
  createPublication: Function;
  updatePublication: Function;
}

class EditPublicationsContainer extends React.Component<Props, State> {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getOnePublication(this.props.match.params.id).then((r: any) => {
        this.setState({ publication: r['payload'], edit: true })
      }).catch((e: any) => console.log(e))
    } else {
      this.setState({ publication: { _id: '', content: '', title: '', username: '' }, edit: false });
    }
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.state.edit ?
          this.props.updatePublication(values, this.props.match.params.id).then(() => {
            this.props.history.push(PATH.HOME);
          }).catch((e: any) => console.log(e))
          :
          this.props.createPublication(values).then(() => {
            this.props.history.push(PATH.HOME);
          }).catch((e: any) => console.log(e))
      }
    });
  };

  isLoaded() {
    if (this.state && this.state.edit !== null && this.state.publication) {
      return true
    }
    return false
  }

  render() {
    return (
      <>
        {
          this.isLoaded() ?
            <Form style={{ width: '100%', height: '100%' }} onSubmit={this.onSubmit}>
              <EditPublicationsComponent form={this.props.form} edit={this.state.edit} publication={this.state.publication} />
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
    { createPublication, getOnePublication, updatePublication }
  )(WrappedEditPublicationsContainer)
);

