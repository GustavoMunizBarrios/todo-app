import { useState } from "react";
import bgMobileDark from "./images/bg-mobile-dark.jpg";
import bgMobileLight from "./images/bg-mobile-light.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import iconSun from "./images/icon-sun.svg";
import iconMoon from "./images/icon-moon.svg";
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
  const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All");
  const [mode, setMode] = useState<"light" | "dark">("dark");

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
  function handleAddTask(task: Task) {
    setTasks((tasks) => [...tasks, task]);
  }
  function handleDeleteCompletedTasks() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  }
  function filterTasks(): Task[] {
    switch (filter) {
      case "Active":
        return tasks.filter((task) => !task.done);
      case "Completed":
        return tasks.filter((task) => task.done);
      case "All":
      default:
        return tasks;
    }
  }
  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    console.log(`Change to ${mode}`);
  }

  return (
    <div
      className={`relative flex flex-col h-screen text-center items-center font-display -z-50 
      ${mode === "dark" ? "bg-veryDarkBlue" : "bg-veryLightGrayishBlue"} `}
    >
      <div className="flex w-screen justify-between items-center pt-11 pr-5 pl-5 pb-8 sm:w-[480px]">
        <h1 className="text-veryLightGray font-bold text-[1.75rem] tracking-[10px] sm:text-[2.3rem]">
          TODO
        </h1>
        <button onClick={() => toggleMode()}>
          {mode === "dark" ? (
            <img
              className="w-[1.31rem] sm:w-[1.8rem]"
              src={iconSun}
              alt="Sun icon"
            />
          ) : (
            <img
              className="w-[1.31rem] sm:w-[1.8rem]"
              src={iconMoon}
              alt="Moon icon"
            />
          )}
        </button>
      </div>

      {mode === "dark" ? (
        <>
          <img
            className="absolute top-0 -z-10 sm:hidden "
            src={bgMobileDark}
            alt="Background dark"
          />
          <img
            className="hidden absolute top-0 -z-10 sm:block xl:w-[120rem]"
            src={bgDesktopDark}
            alt="Background dark"
          />
        </>
      ) : (
        <>
          <img
            className="absolute top-0 -z-10 sm:hidden"
            src={bgMobileLight}
            alt="Background Light"
          />
          <img
            className="hidden absolute top-0 -z-10 sm:block xl:w-[120rem]"
            src={bgDesktopLight}
            alt="Background Light"
          />
        </>
      )}

      <NewTask handleAddTask={handleAddTask} mode={mode} />
      <TaskList
        tasks={filterTasks()}
        handleToggleTask={handleToggleTask}
        handleDeleteTask={handleDeleteTask}
        handleDeleteCompletedTasks={handleDeleteCompletedTasks}
        mode={mode}
      />
      <SortTasks setFilter={setFilter} currentFilter={filter} mode={mode} />
    </div>
  );
}
