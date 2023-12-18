import React, { useCallback } from 'react';
import './calendar.css'
import { useCalendar } from '../../context/CalendarContext';
import { useEventContext } from '../../context/EventContext';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const Calendar = ({ year, month }) => {
  const { setSelectedDate } = useCalendar();
  const { events } = useEventContext();

  const handleDateClick = (day) => {
    const newDate = new Date(year, month - 1, day);
    setSelectedDate(newDate);
    document.body.classList.add("date-selected");
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

  const hasEvents = (day) => {
    const eventDate = new Date(year, month - 1, day);

    return events.some((event) => {
      const eventDateFormatted = event.date.toDateString();
      const currentDateFormatted = eventDate.toDateString();
      return eventDateFormatted === currentDateFormatted;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(date);
    const startDay = getMonthStartDay(date);

    const blanks = [];
    for (let i = 0; i < startDay; i++) {
      blanks.push(<td key={`blank-${i}`} className="calendar-day empty">{''}</td>);
    }

    const daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const className = `calendar-day relative text-sm p-2 rounded cursor-pointer text-neutral-700 hover:bg-gray-200 hover:text-black text-center ${hasEvents(day) && "event-indicator"} ${(day === currentDay && year === currentYear && month === currentMonth) && 'today text-rose-600'}`;
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
    <div className="border border-neutral-300 p-4 py-3 rounded-lg calendar-container mb-4" id={`calendar-${month}-${year}`}>
      <h2 className='text-lg font-bold text-black'>{months[date.getMonth()]} {date.getFullYear()}</h2>
      <table className="calendar">
        <thead>
          <tr>
            {days.map((day, i) => (
              <th key={`day-${i}`} className="calendar-header text-sm text-neutral-500">
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
