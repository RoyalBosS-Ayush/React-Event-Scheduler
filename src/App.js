import Schedular from "./pages/Schedular";
import { CalendarProvider } from './context/CalendarContext';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <EventProvider>
          <Schedular />
        </EventProvider>
      </CalendarProvider>
    </div>
  );
}

export default App;
