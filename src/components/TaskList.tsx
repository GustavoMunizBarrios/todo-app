import iconCross from "../images/icon-cross.svg";
import iconCheck from "../images/icon-check.svg";

interface Task {
  id: number;
  task: string;
  done: boolean;
}
export default function TaskList({
  tasks,
  handleToggleTask,
  handleDeleteTask,
  handleDeleteCompletedTasks,
  mode,
}: {
  tasks: Task[];
  handleToggleTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  handleDeleteCompletedTasks: () => void;
  mode: "light" | "dark";
}) {
  const numDoneTasks = tasks.filter((task) => !task.done).length;

  return (
    <div className="pt-6 shadow-md">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-start relative
            w-[20.5rem] h-12 sm:w-[480px] sm:h-[3.7rem]
            pl-4 border-b-[1px] 
            ${
              mode === "dark"
                ? "bg-veryDarkDesaturatedBlue border-veryDarkGrayishBlue"
                : "bg-veryLightGray border-veryLightGrayishBlue text-veryDarkGrayishBlue"
            }`}
          >
            <input
              type="checkbox"
              className={`appearance-none w-5 h-5 sm:w-6 sm:h-6
              rounded-full border mr-3 sm:mr-4 sm:ml-2
              cursor-pointer 
              ${task.done ? "bg-gradient-to-r from-cyan to-pink" : ""} 
              ${
                mode === "dark"
                  ? "border-veryDarkGrayishBlue"
                  : "border-lightGrayishBlue"
              }

              `}
              onChange={() => {
                handleToggleTask(task.id);
              }}
            />
            <img
              src={iconCheck}
              alt="Icon for Checking Tasks"
              className={`absolute w-2 h-2 left-[1.4rem] sm:w-3 sm:h-2 sm:left-[1.8rem]
              ${task.done ? "" : "hidden"}`}
            />

            <span
              className={`text-xs sm:text-[1.1rem]              
              ${
                mode === "dark"
                  ? task.done
                    ? "text-darkGrayishBlue line-through"
                    : "text-lightGrayishBlue"
                  : task.done
                  ? "text-lightGrayishBlue line-through"
                  : "text-veryDarkGrayishBlue"
              }  `}
            >
              {task.task}
            </span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="ml-auto mr-4"
            >
              <img src={iconCross} alt="cross icon" className="w-3 sm:w-4" />
            </button>
          </li>
        ))}
        {/* ++++++++++++++++++++++++++++++++++++ */}
        {/* Bottom of the list (count and clear) */}
        {/* ++++++++++++++++++++++++++++++++++++ */}
        <div
          className={`flex items-center justify-between 
            w-[20.5rem] h-12
            pl-4 pr-4 sm:w-[480px] sm:h-[3.7rem]
            rounded-b-md
            text-xs sm:text-[0.95rem]
            ${
              mode === "dark"
                ? "text-darkGrayishBlue bg-veryDarkDesaturatedBlue"
                : "bg-veryLightGray text-darkGrayishBlue"
            }`}
        >
          <p>{numDoneTasks} Tasks left</p>

          <button
            onClick={() => handleDeleteCompletedTasks()}
            className={`${
              mode === "dark"
                ? "hover:text-lightGrayishBlueHover"
                : "hover:text-veryDarkGrayishBlue"
            } `}
          >
            <p>Clear Completed</p>
          </button>
        </div>
      </ul>
    </div>
  );
}
