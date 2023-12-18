import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Calendar year={2023} month={11} />
      <Calendar year={2023} month={12} />
      <Calendar year={2024} month={1} />
    </div>
  );
}

export default App;
