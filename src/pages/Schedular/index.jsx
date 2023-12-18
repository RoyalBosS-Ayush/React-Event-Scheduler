import React from 'react';
import { useCalendar } from '../../context/CalendarContext';
import MultipleCalendars from '../../components/MultipleCalendars';
import './schedular.css'
import EventList from '../../components/EventList';

const Schedular = () => {
  const { selectedDate } = useCalendar();

  const closeEventList = () => {
    document.body.classList.remove("date-selected");
  }

  return (
    <div className='row colcontainer'>
      <div className='h-vh leftcol'>
        <MultipleCalendars />
      </div>
      <div className='h-vh relative grow flex flex-col justify-center rightcol'>
        <span className="close-event-list-btn cursor-pointer absolute top-4 left-4" onClick={closeEventList}>Close</span>
        {selectedDate ? <EventList selectedDate={selectedDate} /> : <div>Select a date</div>}
      </div>
    </div>
  );
};

export default Schedular;
