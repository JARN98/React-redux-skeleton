import './General.css';

import * as React from 'react';

import GeneralComponents from './GeneralComponent';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getPublications, cleanPublications, deletePublication } from '../../../redux/actions/publicationAction'
import { Icon, Modal } from 'antd';

const confirm = Modal.confirm;

export interface GeneralState {
  loadingDelete: boolean;
}
export interface GeneralProps {
  getPublications: Function,
  cleanPublications: Function,
  deletePublication: Function,
  publications: any
}


class General extends React.Component<GeneralProps, GeneralState> {
  state = {
    loadingDelete: false
  }

  async componentDidMount() {
    await this.props.getPublications();
  }

  deletePublications = async (id: string) => {
    this.setState({ loadingDelete: true })
    this.props.deletePublication(id).then(() => {
      this.setState({ loadingDelete: false });
      this.props.getPublications();
    }).catch((err: any) => {
      console.log(err);
    });
  }

  showPropsConfirm = (id: string, title: string) => {
    const { deletePublications } = this;
    const { loadingDelete } = this.state;
    confirm({
      title: `¿Estás seguro?`,
      content: `¿Quieres borrar la publicación de título ${title}?`,
      okText: 'Sí',
      okType: 'primary',
      okButtonProps: {
        disabled: loadingDelete,
      },
      cancelText: 'No',
      onOk() {
        return deletePublications(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    const { publications } = this.props;

    return (
      <>
        {
          publications.list ?
            <GeneralComponents publications={publications.list}
              showPropsConfirm={this.showPropsConfirm}
            />
            :
            <Icon type="loading" style={{ fontSize: 24 }} spin />
        }
      </>
    );
  }


  async componentWillUnmount() {
    await this.props.cleanPublications();
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  publications: state.publications
});

export default withRouter(
  connect(
    mapStateToProps,
    { getPublications, cleanPublications, deletePublication }
  )(General)
);