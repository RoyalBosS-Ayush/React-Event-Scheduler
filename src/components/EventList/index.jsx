import React, { useState } from 'react';
import Event from '../Event';
import AddEventForm from '../AddEventForm';
import { useEventContext } from '../../context/EventContext';

const EventList = ({ selectedDate }) => {
  const { events } = useEventContext();
    
  console.log("events ", events, selectedDate);
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
        <div className="event-list">
            <h2>{formattedDate}</h2>
            <ul>
                {eventsOnSelectedDate.length > 0 ? (
                    eventsOnSelectedDate.map((event) => (
                        <li key={event.id}>
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