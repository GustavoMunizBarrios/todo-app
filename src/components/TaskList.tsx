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
}: {
  tasks: Task[];
  handleToggleTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}) {
  const numDoneTasks = tasks.filter((task) => !task.done).length;

  return (
    <div className="pt-6">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-start relative
            w-[20.5rem] h-12
            bg-veryDarkDesaturatedBlue
            pl-4 border-b-[1px] border-veryDarkGrayishBlue"
          >
            <input
              type="checkbox"
              /* checked={task.done} */
              className={`appearance-none w-5 h-5 rounded-full border border-veryDarkGrayishBlue mr-3 cursor-pointer
              ${task.done ? "bg-gradient-to-r from-cyan to-pink" : ""} 
              `}
              onChange={() => {
                handleToggleTask(task.id);
              }}
            />
            <img
              src={iconCheck}
              alt="Icon for Checking Tasks"
              className={`absolute w-2 h-2 left-[1.4rem] ${
                task.done ? "" : "hidden"
              }`}
            />

            <span
              className={`text-xs ${
                task.done
                  ? "text-darkGrayishBlue line-through"
                  : "text-lightGrayishBlue"
              }  `}
            >
              {task.task}
            </span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="ml-auto mr-4"
            >
              <img src={iconCross} alt="cross icon" className="w-3" />
            </button>
          </li>
        ))}
        {/* ++++++++++++++++++++++++++++++++++++ */}
        {/* Bottom of the list (count and clear) */}
        {/* ++++++++++++++++++++++++++++++++++++ */}
        <div
          className="flex items-center justify-between 
            w-[20.5rem] h-12 pl-4 pr-4
            bg-veryDarkDesaturatedBlue
            rounded-b-md
            text-xs text-darkGrayishBlue"
        >
          <p>{numDoneTasks} Tasks left</p>

          <button className="hover:text-lightGrayishBlueHover">
            <p>Clear Completed</p>
          </button>
        </div>
      </ul>
    </div>
  );
}
