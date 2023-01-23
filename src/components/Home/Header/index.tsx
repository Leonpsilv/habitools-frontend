import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { CarryOutOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import style from "./styles/Header.module.css";

const items1: MenuProps['items'] = ['1', '2', '3', '4', '5'].map((key) => ({
  key,
  label: `dia ${key}`,
}));

const HeaderHome = () => {
  const {Header} = Layout;
  return (
    <Header className={style.header}>
      <div className={style.logo} />
      <Space className={style.iconLogo}>
        <CarryOutOutlined style={{color: 'white', fontSize: '55px'}}/>
      </Space>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} className={style.logoItens}/>
    </Header>
  )
}

export default HeaderHome;