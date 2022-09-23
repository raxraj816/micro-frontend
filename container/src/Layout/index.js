import React from "react";
import { Layout } from "antd";
import HeaderComponent from "../components/HeaderComponent";
import SideMenu from "../components/SideMenu";
const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <div>
      <Layout>
        <Header style={{ padding: "0" }}>
          <HeaderComponent />
        </Header>
        <Layout>
          <Sider>
            <SideMenu />
          </Sider>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
