import bgMobileDark from "./images/bg-mobile-dark.jpg";
import iconSun from "./images/icon-sun.svg";

import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import SortTasks from "./components/SortTasks";

export default function App() {
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
      <TaskList />
      <SortTasks />
      {/*       <p className="text-darkGrayishBlue text-base font-medium">
        Drag and drop to reorder list
      </p> */}
    </div>
  );
}
