import React from 'react';
import { useEventContext } from '../../context/EventContext';

const Event = ({ id, time, description }) => {
  const { deleteEvent } = useEventContext();

    const handleDelete = () => {
        deleteEvent(id);
    };

    return (
        <div className="event">
            <div className="event-details">
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Description:</strong> {description}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Event;
