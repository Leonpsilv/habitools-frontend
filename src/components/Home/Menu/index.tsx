import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, CarryOutOutlined } from '@ant-design/icons';

const items2: MenuProps['items'] = [CarryOutOutlined, LaptopOutlined, NotificationOutlined, UserOutlined, LaptopOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Semana ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const MenuSection = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
      items={items2}
    /> 
  )
}

export default MenuSection;