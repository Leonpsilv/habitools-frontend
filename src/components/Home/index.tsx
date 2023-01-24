import { Breadcrumb, Layout, theme } from 'antd';
import { useState } from 'react';
import useGetDate from '../../Hooks/useGetDate';

import HeaderHome from './Header';
import MenuSection from './Sections';

const { Content, Footer, Sider } = Layout;

const Home = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const {date, months} = useGetDate();
    const [selectMonth, setSelectMonth] = useState(months[date.getMonth()]);
  
    return (
      <Layout>
        <HeaderHome setSelectMonth={setSelectMonth}/>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{selectMonth}</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={200}>
              <MenuSection />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>{selectMonth}</Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    );

};

export default Home;