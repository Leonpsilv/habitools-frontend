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
  onBlur: any
};

const InputForm: React.FC<Props> = (Props) => (
  <>
    <Input
      placeholder={Props.place}
      className={Props.classType}
      name={Props.name}
      type={Props.inputType}
      value={Props.value}
      onChange={Props.onChange}
      onBlur={Props.onBlur}
    />
    {Props.error && <p className={style.msgError}>{Props.error}</p>}
  </>
);

export default InputForm;