import React from 'react'
import { Form, Input, Row, Col } from 'antd'

export interface Props {
  form: any;
}

function editPublicationsComponent(props: Props) {

  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <>
      <h1>Editar Publicación</h1>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input the content',
                },
              ],
            })(<Input placeholder="Please input the content" />)}
          </Form.Item>
          <Form.Item label="Content">
            {getFieldDecorator('content', {
              rules: [
                {
                  required: true,
                  message: 'Please input the content'
                },
              ],
            })(<Input placeholder="Please input the content" />)}
          </Form.Item>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  )
}

export default editPublicationsComponent;