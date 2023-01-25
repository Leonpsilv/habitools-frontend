const useGetDate = () => {
  const date = new Date();
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const dayWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
  const dayWeekEnglish = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  function getAllDaysInMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const dates = [];
  
    while (date.getMonth() === month) {
      const [dayWeek, month, day] = new Date(date).toString().split(" ");
      const infos = {
        month,
        day,
        dayWeek
      }

      dates.push(infos);
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }

  return {
    date,
    months,
    dayWeek,
    dayWeekEnglish,
    getAllDaysInMonth
  }
}

export default useGetDate;