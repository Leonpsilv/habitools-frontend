import { Breadcrumb } from 'antd';

const MenuInfo = ({selectMonth}: any) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{selectMonth}</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default MenuInfo;