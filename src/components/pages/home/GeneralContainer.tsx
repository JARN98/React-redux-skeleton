import './General.css';

import * as React from 'react';

import GeneralComponents from './GeneralComponent';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getPublications, cleanPublications } from '../../../redux/actions/publicationAction'
import { Icon } from 'antd';

export interface GeneralState { }
export interface GeneralProps {
  getPublications: Function,
  cleanPublications: Function,
  publications: any
}


class General extends React.Component<GeneralProps, GeneralState> {

  async componentDidMount() {
    await this.props.getPublications();
  }

  render() {

    const { publications } = this.props;

    return (
      <>
        {
          publications.list ?
            <GeneralComponents publications={publications.list} />
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
    { getPublications, cleanPublications }
  )(General)
);