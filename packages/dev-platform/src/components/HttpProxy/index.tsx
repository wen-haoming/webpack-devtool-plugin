import React, { useEffect, useRef } from 'react';
import { Form, AutoComplete, Input, Button, Row, Col } from 'antd';
import { FormProps } from 'antd/es/form';
// import SockJS from 'sockjs-client'
const { Item } = Form;

const options = [{ value: 'http://a.com' }, { value: 'http://c.com' }, { value: 'http://d.com' }];

const HttpProxy = () => {
  const sockjsRef = useRef({});
  const onFinish: FormProps['onFinish'] = (obj) => {
    // fetch('/')
    sockjsRef.current.send(JSON.stringify(obj));
  };

  useEffect(() => {
    const sockjs = new window.SockJS('http://0.0.0.0:9999/echo');
    sockjsRef.current = sockjs;

    sockjs.onopen = () => {
      console.log('sockjs client opened');
    };
    sockjs.onmessage = () => {
      console.log('sockjs client messaged');
    };
    sockjs.onclose = () => {
      console.log('sockjs client closed');
    };

    return () => {
      sockjs.close();
      console.log('close');
    };
  }, []);

  return (
    <Form onFinish={onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 24 }} labelAlign="left">
      <Item name="/" label="/" rules={[{ required: true, message: '请填写匹配对应的 url ' }]}>
        <AutoComplete
          allowClear
          style={{ width: 250 }}
          options={options}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </Item>
      <Row justify="center">
        <Button style={{ width: 100 }} htmlType="submit" type="primary">
          确定
        </Button>
      </Row>
    </Form>
  );
};

export default React.memo(HttpProxy);
