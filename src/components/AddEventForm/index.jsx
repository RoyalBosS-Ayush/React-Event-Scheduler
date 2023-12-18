import React, { useState } from 'react';
import { useCalendar } from '../../context/CalendarContext';
import { useEventContext } from '../../context/EventContext';
import './eventForm.css'

const AddEventForm = ({ year, month, day }) => {
  const { selectedDate } = useCalendar();
  const { addEvent } = useEventContext();
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time || !description) {
      alert('Please fill in all fields');
      return;
    }

    const newEvent = {
      id: Date.now(), // Generating a unique ID
      date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()),
      time,
      description,
    };

    addEvent(newEvent);

    setTime('');
    setDescription('');
  };

  return (
    <div className="add-event-form flex justify-center">
      <form className='w-4/5 px-3 py-2 rounded-lg border border-neutral-300 mt-4' onSubmit={handleSubmit}>
        <div className='flex items-center mb-1'>
          <label htmlFor="time">Time:</label>
          <input
            className='px-2 mx-2 rounded-lg'
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="Enter time"
          />
        </div>
        <div className='description-container flex items-center justify-between'>
          <div className='flex items-center'>
            <label htmlFor="description">Description:</label>
            <input
              className='px-2 mx-2 rounded-lg'
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter description"
            />
          </div>
          <button className='bg-neutral-700 text-white px-2 py-1 rounded-lg' type="submit">Add Event</button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
