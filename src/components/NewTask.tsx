import { useState } from "react";

interface NewTaskProps {
  mode: "light" | "dark";
  handleAddTask: (newTask: { id: number; task: string; done: boolean }) => void;
}

export default function NewTask({ mode, handleAddTask }: NewTaskProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (!taskDescription) return;

    const newtask = { id: Date.now(), task: taskDescription, done: false };
    console.log(newtask);

    handleAddTask(newtask);
    setTaskDescription("");
  }
  return (
    <>
      <div
        className={`flex items-center justify-start 
      w-[20.5rem] h-12 sm:w-[480px] sm:h-[3.7rem]
      rounded-md
      pl-4 font-display ${
        mode === "dark" ? "bg-veryDarkDesaturatedBlue" : "bg-veryLightGray"
      }`}
      >
        <span
          className={`w-5 h-5 border rounded-full sm:w-6 sm:h-6 ${
            mode === "dark"
              ? "border-veryDarkGrayishBlue"
              : "border-lightGrayishBlue"
          }`}
        />
        <form onSubmit={handleSubmit} className="pl-4 text-veryDarkGrayishBlue">
          <input
            className={`outline-none focus:outline-none
            focus:text-lightGrayishBlueHover text-[0.8rem] font-normal sm:text-[1.1rem]
            ${
              mode === "dark"
                ? "bg-veryDarkDesaturatedBlue"
                : "bg-veryLightGray"
            }`}
            type="text"
            placeholder="Create a new todo..."
            value={taskDescription}
            onChange={(event) => setTaskDescription(event.target.value)}
          />
        </form>
      </div>
    </>
  );
}
