import React, { useState } from 'react';
import Event from '../Event';
import AddEventForm from '../AddEventForm';
import { useEventContext } from '../../context/EventContext';

const EventList = ({ selectedDate }) => {
    const { events } = useEventContext();

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const eventsOnSelectedDate = events.filter(
        (event) =>
            event.date.getFullYear() === selectedDate.getFullYear() &&
            event.date.getMonth() === selectedDate.getMonth() &&
            event.date.getDate() === selectedDate.getDate()
    );
    // const eventsOnSelectedDate = [];

    return (
        <div className="event-list w-full">
            <h2 className='text-center text-2xl font-bold mb-4'>{formattedDate}</h2>
            <ul className='flex flex-col items-center'>
                {eventsOnSelectedDate.length > 0 ? (
                    eventsOnSelectedDate.map((event) => (
                        <li className='w-4/5' key={event.id}>
                            <Event
                                id={event.id}
                                time={event.time}
                                description={event.description}
                            />
                        </li>
                    ))
                ) : (
                    <li>No events for this day</li>
                )}
            </ul>

            <AddEventForm />
        </div>
    );
};

export default EventList;