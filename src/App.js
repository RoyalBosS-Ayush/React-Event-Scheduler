import Schedular from "./pages/Schedular";
import { CalendarProvider } from './context/CalendarContext';

function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <Schedular />
      </CalendarProvider>
    </div>
  );
}

export default App;
