import { Link } from "react-router-dom";

export default function Tasks() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Assignment 2</h1>
      <div className="flex gap-2.5 items-center mt-5">
        <Link to="/task1">
          <button className="px-5 py-2.5 text-base cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Task 1
          </button>
        </Link>
        <Link to="/task2">
          <button className="px-5 py-2.5 text-base cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Task 2
          </button>
        </Link>
        <Link to="/task3">
          <button className="px-5 py-2.5 text-base cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Task 3
          </button>
        </Link>
        <Link to="/task4">
          <button className="px-5 py-2.5 text-base cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Task 4
          </button>
        </Link>
      </div>
    </div>
  );
}
