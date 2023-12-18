import React, { useCallback } from 'react';
import './calendar.css'
import { useCalendar } from '../../context/CalendarContext';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const Calendar = ({ year, month }) => {
  const { setSelectedDate } = useCalendar();

  const handleDateClick = (day) => {
    const newDate = new Date(year, month - 1, day);
    setSelectedDate(newDate);
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const date = new Date(year, month - 1, 1);

  const getDaysInMonth = useCallback((date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  }, []);

  const getMonthStartDay = useCallback((date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  }, []);

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(date);
    const startDay = getMonthStartDay(date);

    const blanks = [];
    for (let i = 0; i < startDay; i++) {
      blanks.push(<td key={`blank-${i}`} className="calendar-day empty">{''}</td>);
    }

    const daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const className = (day === currentDay && year === currentYear && month === currentMonth) ? 'calendar-day today' : 'calendar-day';
      daysArray.push(
        <td key={`day-${day}`} className={className} onClick={() => handleDateClick(day)}>
          {day}
        </td>
      );
    }

    const totalSlots = [...blanks, ...daysArray];
    const rows = [];
    let cells = [];

    totalSlots.forEach((slot, i) => {
      if (i % 7 !== 0) {
        cells.push(slot);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(slot);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    return rows.map((row, i) => <tr key={`row-${i}`}>{row}</tr>);
  };

  return (
    <div className="calendar-container" id={`calendar-${month}-${year}`}>
      <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
      <table className="calendar">
        <thead>
          <tr>
            {days.map((day, i) => (
              <th key={`day-${i}`} className="calendar-header">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
