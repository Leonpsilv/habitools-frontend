import React from 'react';

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

  function getCurrentWeek() {
    const currentDay = date.getDate();
    const currentWeek = (currentDay / 7);

    if(Math.trunc(currentWeek) !== currentWeek){
      return (Math.trunc(currentWeek) + 1).toString();
    }
    return currentWeek.toString();
  }

  const [currentMonth, setCurrentMonth] = React.useState(months[date.getMonth()]);
  const [currentYear, setCurrentYear] = React.useState(date.getFullYear());

  return {
    date,
    months,
    dayWeek,
    dayWeekEnglish,
    currentMonth,
    currentYear,
    getAllDaysInMonth,
    getCurrentWeek
  }
}

export default useGetDate;