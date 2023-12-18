import React, { useCallback, useEffect, useMemo } from 'react';
import Calendar from '../../components/Calendar';

const MultipleCalendars = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  
  useEffect(() => {
    handleMonthChange({target:{value: `calendar-${currentMonth}-${currentYear}`}})  
    // eslint-disable-next-line
  }, []);

  const calendars = useMemo(() => {
    const cals = [];
    const monthsToDisplay = 6;

    for (let i = -monthsToDisplay; i <= monthsToDisplay; i++) {
      let year = currentYear;
      let month = currentMonth + i;

      while (month <= 0 || month > 12) {
        if (month <= 0) {
          month += 12;
          year--;
        } else {
          month -= 12;
          year++;
        }
      }

      cals.push({ month, year });
    }

    return cals;
  }, [currentYear, currentMonth]);

  const handleMonthChange = useCallback((event) => {
    const ele = document.getElementById(event.target.value);
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <h1>Multiple Calendars</h1>
      <div className="dropdown">
        <select onChange={handleMonthChange}>
          {calendars.map((calendar) => (
            <option key={`option-${calendar.month}-${calendar.year}`} value={`calendar-${calendar.month}-${calendar.year}`}>
              {new Date(calendar.year, calendar.month, 1).toLocaleString('default', { month: 'long', year: "numeric" })}
            </option>
          ))}
        </select>
      </div>
      <div className="multiple-calendars">
        {calendars.map((calendar) => <Calendar key={`calendar-${calendar.month}-${calendar.year}`} year={calendar.year} month={calendar.month} />)}
      </div>
    </div>
  );
};

export default MultipleCalendars;
