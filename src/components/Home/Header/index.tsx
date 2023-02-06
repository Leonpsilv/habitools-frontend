import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { CarryOutOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import style from "./styles/Header.module.css";
import useGetDate from "../../../Hooks/useGetDate";

import SelectDate from "./SelectDate";

const HeaderHome = ({selectMonth, setSelectMonth, setSelectDay, setSelectYear}: any) => {
  const {Header} = Layout;
  const {months} = useGetDate();

  const items1: MenuProps['items'] = months.map((key) => ({
    key,
    label: key,
  }));

  function setNewSelectedMonth ({key}: any) {
    setSelectMonth(key);
  }

  return (
    <Header className={style.header}>
      <Space className={style.iconLogo}>
        <CarryOutOutlined style={{color: 'white', fontSize: '55px'}}/>
      </Space>

      <SelectDate
        setSelectMonth={setSelectMonth}
        setSelectDay={setSelectDay}
        setSelectYear={setSelectYear}
      />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectMonth]}
        items={items1}
        className={style.logoItens}
        onClick={({key}) => setNewSelectedMonth({key})}
        selectedKeys={[selectMonth]}
      />
    </Header>
  )
}

export default HeaderHome;