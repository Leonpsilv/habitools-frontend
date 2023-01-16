import React from 'react';
import { Button, Space } from 'antd';

type Props = {
  value: string,
  classType: string
}

const ButtonForm: React.FC<Props> = (Props) => (
  <Space wrap>
    <Button
      type="primary"
      className={Props.classType}
    >
      {Props.value}
    </Button>
  </Space>
);

export default ButtonForm;