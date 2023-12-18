import React, { useState } from 'react';
import { useCalendar } from '../../context/CalendarContext';
import { useEventContext } from '../../context/EventContext';

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
    <div className="add-event-form">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
            placeholder="Enter time"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description"
          ></textarea>
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;

// import React, { useState } from 'react';
// import { useEventContext } from '../../context/EventContext';

// const AddEventForm = () => {
//   const { addEvent } = useEventContext();
//   const [time, setTime] = useState('');
//   const [description, setDescription] = useState('');

//   const handleTimeChange = (e) => {
//     setTime(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!time || !description) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const newEvent = {
//       id: Date.now(),
//       time,
//       description,
//       date: new Date(),
//     };

//     addEvent(newEvent);

//     setTime('');
//     setDescription('');
//   };

//   const handleReset = () => {
//     setTime('');
//     setDescription('');
//   };

//   return (
//     <div className="add-event-form">
//       <h2>Add Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="time">Time:</label>
//           <input
//             type="time"
//             id="time"
//             value={time}
//             onChange={handleTimeChange}
//             placeholder="Enter time"
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={handleDescriptionChange}
//             placeholder="Enter description"
//           ></textarea>
//         </div>
//         <div>
//           <button type="button" onClick={handleReset}>Reset</button>
//           <button type="submit">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddEventForm;
