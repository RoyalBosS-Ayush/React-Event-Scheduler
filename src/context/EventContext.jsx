import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      "id": new Date(1702894147367),
      "date": new Date("2023-12-17T18:30:00.000Z"),
      "time": "21:44",
      "description": "dfss"
    },
    {
      "id": new Date(1702893878629),
      "date": new Date("2023-12-06T18:30:00.000Z"),
      "time": "12:56",
      "description": "wq"
    },
    {
      "id": new Date(1702893917846),
      "date": new Date("2023-12-22T18:30:00.000Z"),
      "time": "05:23",
      "description": "dasd"
    },
    {
      "id": new Date(1702893933014),
      "date": new Date("2023-12-06T18:30:00.000Z"),
      "time": "05:04",
      "description": "dkkn"
    }
  ]);

  const addEvent = (newEvent) => {
    console.log(newEvent);
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
