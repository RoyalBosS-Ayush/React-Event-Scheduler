import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};
