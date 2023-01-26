import { Layout, theme } from 'antd';
import { useState } from 'react';
import useGetDate from '../../Hooks/useGetDate';

import HeaderHome from './Header';
import MenuSection from './Menu';
import MenuInfo from './Menu/MenuInfo';

const { Content, Footer, Sider } = Layout;

const Home = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const {date, months} = useGetDate();
    const [selectMonth, setSelectMonth] = useState(months[date.getMonth()]);
    const [selectDay, setSelectDay] = useState(date.getDate());
  
    return (
      <Layout>
        <HeaderHome setSelectMonth={setSelectMonth}/>

        <Content style={{ padding: '0 50px' }}>
          <MenuInfo selectMonth={selectMonth} selectDay={selectDay} />

          <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={200}>

              <MenuSection selectMonth={selectMonth} setSelectDay={setSelectDay} selectDay={selectDay}/>
            </Sider>

            <Content style={{ padding: '0 24px', minHeight: 280 }}>{selectDay} de {selectMonth} de 2023</Content>
          </Layout>

        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    );

};

export default Home;