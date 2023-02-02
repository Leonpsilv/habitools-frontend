import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const onChange = (date: any) => {
  if (date) {
    console.log(date.$d);
  }
  return
};

const SelectDate: any= () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      size='large'
      presets={[
        { label: 'Ontem', value: dayjs().add(-1, 'd') },
        { label: 'Semana passada', value: dayjs().add(-7, 'd') },
        { label: 'Mês passado', value: dayjs().add(-1, 'month') },
        { label: 'Ano passado', value: dayjs().add(-1, 'year') },
      ]}
      onChange={(date) => onChange(date)}
      placeholder="Data específica"
      defaultPickerValue={dayjs()}
      format="DD-MM-YYYY"
    />
  </Space>
);

export default SelectDate;