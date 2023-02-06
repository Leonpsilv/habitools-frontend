import { Breadcrumb } from 'antd';

const MenuInfo = ({selectMonth, selectDay, selectYear}: any) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{selectYear}</Breadcrumb.Item>
          <Breadcrumb.Item>{selectMonth}</Breadcrumb.Item>
          <Breadcrumb.Item>dia {selectDay}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default MenuInfo;