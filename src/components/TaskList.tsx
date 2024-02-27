const initialTasks = [
  { id: 1, task: "10 minutes meditation", done: false },
  { id: 2, task: "Read for 1 hour", done: false },
  { id: 3, task: "Complete online JS course", done: false },
  { id: 4, task: "Pick up groceries", done: true },
];

import iconCross from "../images/icon-cross.svg";

export default function TaskList() {
  return (
    <div className="pt-6">
      <ul>
        {initialTasks.map((task) => (
          <li
            className="flex items-center justify-start 
            w-[20.5rem] h-12
            bg-veryDarkDesaturatedBlue
            pl-4 border-b-[1px] border-veryDarkGrayishBlue"
          >
            <input type="checkbox" checked={task.done} className="hidden" />
            <span
              className={`block w-5 h-5 bg-transparent rounded-full border-[1px] border-veryDarkGrayishBlue mr-3
               `}
            ></span>
            <span
              className={`text-xs ${
                task.done
                  ? "text-darkGrayishBlue line-through"
                  : "text-lightGrayishBlue"
              }  `}
            >
              {task.task}
            </span>
            <button className="ml-auto mr-4">
              <img src={iconCross} alt="cross icon" className="w-3" />
            </button>
          </li>
        ))}
        {/* Bottom of the list  */}
        <div
          className="flex items-center justify-between 
            w-[20.5rem] h-12 pl-4 pr-4
            bg-veryDarkDesaturatedBlue
            rounded-b-md
            text-xs text-darkGrayishBlue"
        >
          <span>5 items left</span>
          <span>Clear Completed</span>
        </div>
      </ul>
    </div>
  );
}
