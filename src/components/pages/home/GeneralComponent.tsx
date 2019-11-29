import { Button, Card, Col } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';


export interface GeneralComponentsProps {
  // coches: CocheInterface[];
  coches: any;
}

const GeneralComponents: React.FunctionComponent<GeneralComponentsProps> = ({ coches }) => {

  // const renderCoches = (coches: CocheInterface[]): React.ReactNode => {
  //   return coches.map(({ name, id, color, type, number }: CocheInterface) => {
  //     return (
  //       <Col key={id} span={6}>
  //         <Card title={name} className={'card'} extra={<><Link to={`/edit/${id}`}><Button shape="circle" icon="edit" /></Link><Button shape="circle" icon="delete"></Button></>}>
  //           <p>{color}</p>
  //           <p>{type}</p>
  //           <p>{number}</p>
  //         </Card>
  //       </Col>
  //     );
  //   });
  // }

  return (
    <>
      {/* {renderCoches(coches)} */}
    </>
  );
}

export default GeneralComponents;