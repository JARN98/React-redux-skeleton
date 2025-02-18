import { Button, Card, Col, Row, Icon } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IPublications } from '../../../interfaces';


export interface GeneralComponentsProps {
  publications: IPublications[];
  showPropsConfirm: any
}

const GeneralComponents: React.FunctionComponent<GeneralComponentsProps> = ({ publications, showPropsConfirm }) => {
  const renderPublications = (publications: IPublications[]): React.ReactNode => {
    return publications.map(({ title, username, _id, content }: IPublications, index) => {
      return (
        <Col span={6} key={_id}>
          <Card title={title} className={'card'} extra={<><Link to={`/home/edit/${_id}`}><Button shape="circle" icon="edit" /></Link><Button shape="circle" icon="delete" onClick={() => showPropsConfirm(_id, title)}></Button></>}>
            <p>{content}</p>
          </Card>
        </Col>
      );
    });
  }

  return (
    <>
      <Row>
        {renderPublications(publications)}
      </Row>
        <Link to={`/home/edit/`}>
          <div className='float'>
            <Icon type="plus" className='my-float' />
          </div>
        </Link>
    </>
      );
    }
    
export default GeneralComponents;