import React from 'react'
import { Form, Input, Row, Col, Card, Button, PageHeader } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { IPublications } from '../../../interfaces';

export interface Props {
  form: any;
  edit: boolean;
  publication?: IPublications;
}

function editPublicationsComponent(props: Props) {

  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <>
      <Row style={{ height: '100%' }} type='flex' justify='center' align='middle'>
        <Col span={6}></Col>
        <Col span={12}>
          <Card>
            <PageHeader
              onBack={() => window.history.back()}
              title="Editar Publicación"
            />
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the title',
                  },
                ],
              })(<Input placeholder="Please input the title" />)}
            </Form.Item>
            <Form.Item label="Content">
              {getFieldDecorator('content', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the content'
                  },
                ],
              })(<TextArea rows={8} />)}
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Card>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  )
}

export default editPublicationsComponent;