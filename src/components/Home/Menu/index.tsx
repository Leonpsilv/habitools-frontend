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
    currentMonth,
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

  function selectedItem({key}: any) {
    setSelectDay(key);
  }

  const items2: MenuProps['items'] = [1, 2, 3, 4, 5].map(
    (item, index) => {
      const key = String(index + 1);
      if(index * 7 < dateInfos.length){
        return {
          key: `week${key}/${selectMonth}`,
          icon: React.createElement(subItensIcons[index]),
          label: `Semana ${key}`,
    
          children: new Array(7).fill(null).map((_, j) => {
            const subKey: any = index * 7 + j;

            if(subKey < dateInfos.length){
              const dayWeekIndex = dayWeekEnglish.indexOf(dateInfos[subKey].dayWeek);
              return {
                key: `${subKey + 1}/${selectMonth}`,
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

    const defaultSKeys = `${selectDay.toString()}/${currentMonth}`;
    const defaultOKeys = `week${getCurrentWeek()}/${currentMonth}`;
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={[defaultSKeys]}
        defaultOpenKeys={[defaultOKeys]}
        style={{ height: '100%' }}
        items={items2}
        onClick={({key}) => selectedItem({key})}
      />
    )


}

export default MenuSection;