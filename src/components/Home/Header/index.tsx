import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { CarryOutOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import style from "./styles/Header.module.css";
import useGetDate from "../../../Hooks/useGetDate";

const HeaderHome = () => {
  const {Header} = Layout;
  const {months, date} = useGetDate();
  const items1: MenuProps['items'] = months.map((key) => ({
    key,
    label: key,
  }));

  return (
    <Header className={style.header}>
      <div className={style.logo} />
      <Space className={style.iconLogo}>
        <CarryOutOutlined style={{color: 'white', fontSize: '55px'}}/>
      </Space>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${months[date.getMonth()]}`]} items={items1} className={style.logoItens}/>
    </Header>
  )
}

export default HeaderHome;