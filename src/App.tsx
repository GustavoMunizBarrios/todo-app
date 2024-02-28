import { useState } from "react";
import bgMobileDark from "./images/bg-mobile-dark.jpg";
import iconSun from "./images/icon-sun.svg";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import SortTasks from "./components/SortTasks";

interface Task {
  id: number;
  task: string;
  done: boolean;
}
const initialTasks: Task[] = [
  { id: 1, task: "10 minutes meditation", done: false },
  { id: 2, task: "Read for 1 hour", done: false },
  { id: 3, task: "Complete online JS course", done: false },
  { id: 4, task: "Pick up groceries", done: true },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function handleToggleTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }
  function handleDeleteTask(id: number) {
    setTasks((task) => task.filter((task) => task.id !== id));
  }
  return (
    <div className="relative flex flex-col h-screen text-center items-center">
      <div className="flex w-screen justify-between items-center pt-11 pr-5 pl-5 pb-8">
        <h1 className="text-lightGrayishBlue font-bold text-3xl tracking-[10px]">
          TODO
        </h1>
        <button>
          <img className="w-[25px]" src={iconSun} alt="Sun icon" />
        </button>
      </div>

      <img
        className="absolute top-0 -z-40"
        src={bgMobileDark}
        alt="Background dark"
      />
      <NewTask />
      <TaskList
        tasks={tasks}
        handleToggleTask={handleToggleTask}
        handleDeleteTask={handleDeleteTask}
      />
      <SortTasks />
      {/*       <p className="text-darkGrayishBlue text-base font-medium">
        Drag and drop to reorder list
      </p> */}
    </div>
  );
}
