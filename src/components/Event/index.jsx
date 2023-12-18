import React from 'react';
import { useEventContext } from '../../context/EventContext';

const Event = ({ id, time, description }) => {
  const { deleteEvent } = useEventContext();

    const handleDelete = () => {
        deleteEvent(id);
    };

    return (
        <div className="py-4 event border border-neutral-300 mb-4 flex items-start justify-between p-4 rounded-lg">
            <div className="event-details">
                <p className='text-sm mb-1'><strong className='text-base'>Time:</strong> {time}</p>
                <p className='text-sm'><strong className='text-base'>Description:</strong> {description}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Event;
