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
            w-[21rem] h-12
            bg-veryDarkDesaturatedBlue rounded-md
            pl-4"
          >
            <input type="checkbox" checked={task.done} className="hidden" />
            <span
              className={`block w-5 h-5 bg-transparent rounded-full border-[1px] border-veryDarkGrayishBlue mr-2
               ${task.done ? "border-primary" : "border-transparent"}`}
            ></span>
            <span className="text-lightGrayishBlue text-xs">{task.task}</span>
            <button className="ml-auto mr-3">
              <img src={iconCross} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
