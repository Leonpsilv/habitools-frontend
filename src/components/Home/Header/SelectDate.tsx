import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useGetDate from '../../../Hooks/useGetDate';


const SelectDate: any= (props : any) => {
  const {monthsEnglish, months} = useGetDate();

  function onChange (date: any) {
    if (date) {
      const [, month, day, year] = date.$d.toString().split(" ");
      const indexMonth = monthsEnglish.indexOf(month);
      
      props.setSelectMonth(months[indexMonth]);
      props.setSelectYear(year);
      props.setSelectDay(+day);
    }
    return
  };

  return (
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
        format="DD/MM/YYYY"
      />
    </Space>
  );
}


export default SelectDate;