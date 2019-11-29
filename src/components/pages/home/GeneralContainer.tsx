import './General.css';

import * as React from 'react';

// import { CocheInterface } from '../../../interfaces/cocheInterfaces';
// import cochecitos from '../../../services/cochecitos';
import GeneralComponents from './GeneralComponent';

export interface GeneralState {
  // coches: CocheInterface[];
}

class General extends React.Component<any, GeneralState> {
  // state: GeneralState = {
  //   coches: []
  // }

  // componentDidMount() {
  //   let dataCoche: CocheInterface[];
  //   dataCoche = cochecitos();
  //   this.setState({
  //     coches: dataCoche
  //   });
  // }

  render() {
    return (
      <>
        <h1>Viva el betis</h1>
      </>
    );
  }
}

export default General;