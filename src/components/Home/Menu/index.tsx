import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, CarryOutOutlined } from '@ant-design/icons';
import useGetDate from '../../../Hooks/useGetDate';

const MenuSection = ({selectMonth, setSelectDay, selectDay}: any) => {
  const {
    months,
    dayWeek,
    dayWeekEnglish,
    date,
    getAllDaysInMonth,
    getCurrentWeek
  } = useGetDate();
  const dateInfos: any = getAllDaysInMonth(date.getFullYear(), months.indexOf(selectMonth));

  const subItensIcons = [
    CarryOutOutlined,
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
    LaptopOutlined
  ];

  const items2: MenuProps['items'] = [1, 2, 3, 4, 5].map(
    (item, index) => {
      const key = String(index + 1);
      if(index * 7 < dateInfos.length){
        return {
          key: `sub${key}`,
          icon: React.createElement(subItensIcons[index]),
          label: `Semana ${key}`,
    
          children: new Array(7).fill(null).map((_, j) => {
            const subKey: any = index * 7 + j;

            if(subKey < dateInfos.length){
              const dayWeekIndex = dayWeekEnglish.indexOf(dateInfos[subKey].dayWeek);
              return {
                key: `${subKey + 1}`,
                label: `${subKey + 1} - ${dayWeek[dayWeekIndex]}`,
              };
            }
            return null;
          }),
        };
      }
      return null;
    },
  );

  function SelectedItem({key}: any) {
    setSelectDay(key);
  }

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[selectDay.toString()]}
      defaultOpenKeys={[`sub${getCurrentWeek()}`]}
      style={{ height: '100%' }}
      items={items2}
      onClick={({key}) => SelectedItem({key})}
    /> 
  )
}

export default MenuSection;