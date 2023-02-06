import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

const SelectDate: any= (props : any) => {

  function onChange (date: any) {
    if (date) {
      const [, , , year] = date.$d.toString().split(" ");

      props.setSelectYear(year);
    }
    return
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        size='large'
        presets={[
          { label: 'Ano passado', value: dayjs().add(-1, 'year') },
          { label: 'Ano que vem', value: dayjs().add(+1, 'year') },
        ]}
        picker="year"
        onChange={(date) => onChange(date)}
        placeholder={`${dayjs().format('YYYY')}`}
        defaultPickerValue={dayjs()}
        format="YYYY"
      />
    </Space>
  );
}


export default SelectDate;