import React, { useState } from "react";
import { Button, Modal, Layout, Menu, Row, Col } from "antd";
import { SettingOutlined,GlobalOutlined } from "@ant-design/icons";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        style={{
          position: "fixed",
          left: 0,
          bottom: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => setVisible(true)}
      >
        <SettingOutlined style={{ fontSize: 18 }} />
      </Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800}
       bodyStyle={{padding:0}}
       title="Dev plugin"
      >
        <Row style={{height:500}}>
          <Col span={4}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} style={{height:'100%'}}>
              <Menu.Item key="1" icon={<GlobalOutlined />}>
                proxy
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                nav 4
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={20}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, height:'100%'}}
                >
                  content
                </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default App;
