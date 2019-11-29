import React, { Component, ReactNode } from 'react';

import EditCocheComponents from './EditCocheComponents';

interface Props {
  id?: string | number;
}
interface State { }

class EditCocheContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  render(): ReactNode {
    return (
      <>
        {
          this.props.id
            ?
            <EditCocheComponents />
            :
            <>FALLOOOOOOOOO!!!</>
        }
      </>
    )
  }
}

export default EditCocheContainer
