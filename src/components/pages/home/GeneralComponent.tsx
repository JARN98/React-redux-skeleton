import { Button, Card, Col } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IPublications } from '../../../interfaces';


export interface GeneralComponentsProps {
  publications: IPublications[];
}

const GeneralComponents: React.FunctionComponent<GeneralComponentsProps> = ({ publications }) => {

  const renderPublications = (publications: IPublications[]): React.ReactNode => {
    return publications.map(({ title, username, _id, content }: IPublications, index) => {
      return (
        <Col key={index} span={6}>
          <Card title={title} className={'card'} extra={<><Link to={`/home/edit/${_id}`}><Button shape="circle" icon="edit" /></Link><Button shape="circle" icon="delete"></Button></>}>
            <p>{content}</p>
          </Card>
        </Col>
      );
    });
  }

  return (
    <>
      {renderPublications(publications)}
    </>
  );
}

export default GeneralComponents;