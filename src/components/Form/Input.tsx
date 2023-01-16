import React from 'react';
import { Input } from 'antd';

type Props = {
  place: string,
  classType: string,
  name: string,
  inputType: string
};

const InputForm: React.FC<Props> = (Props) => (
  <Input
    placeholder={Props.place}
    className={Props.classType}
    name={Props.name}
    type={Props.inputType}
  />
);

export default InputForm;