import React from 'react';
import { useCalendar } from '../../context/CalendarContext';
import MultipleCalendars from '../../components/MultipleCalendars';
import './schedular.css'

const Schedular = () => {
  const { selectedDate } = useCalendar();

  return (
    <div className='row'>
      <div className='h-vh'>
        <MultipleCalendars />
      </div>
      <div className='h-vh center'>
          {selectedDate ? null : <div>Select a date</div>}
      </div>
    </div>
  );
};

export default Schedular;
