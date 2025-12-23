import { Routes, Route } from "react-router-dom";
import Task1 from "./tasks/task1";
import Task2 from "./tasks/task2";
import Task3 from "./tasks/task3";
import Task4 from "./tasks/task4";
import Tasks from "./tasks";

function App() {
  return (
    <div className="p-8">
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
      </Routes>
    </div>
  );
}

export default App;
