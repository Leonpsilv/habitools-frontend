import React from 'react';
import { Input } from 'antd';

import style from "./styles/Input.module.css";

type Props = {
  place: string,
  classType: string,
  name: string,
  inputType: string
  value: any
  error: any
  onChange: any
};

const InputForm: React.FC<Props> = (Props) => (
  <>
    {Props.error && <p className={style.msgError}>{Props.error}</p>}
    <Input
      placeholder={Props.place}
      className={Props.classType}
      name={Props.name}
      type={Props.inputType}
      value={Props.value}
      onChange={Props.onChange}
    />
  </>
);

export default InputForm;