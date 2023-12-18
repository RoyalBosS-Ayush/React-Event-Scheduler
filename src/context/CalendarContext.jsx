import React, { createContext, useState, useContext } from 'react';

// Create the context
const CalendarContext = createContext();

// Create a custom hook to access the context
export const useCalendar = () => {
  return useContext(CalendarContext);
};

// Context Provider component
export const CalendarProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const value = {
    selectedDate,
    setSelectedDate,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
