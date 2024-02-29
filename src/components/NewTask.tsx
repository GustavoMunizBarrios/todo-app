import { useState } from "react";

interface NewTaskProps {
  handleAddTask: (newTask: { id: number; task: string; done: boolean }) => void;
}

export default function NewTask({ handleAddTask }: NewTaskProps) {
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
        className="flex items-center justify-start 
      w-[20.5rem] h-12
      bg-veryDarkDesaturatedBlue rounded-md
      pl-4 font-display"
      >
        <span className="w-5 h-5 border border-veryDarkGrayishBlue rounded-full " />
        <form onSubmit={handleSubmit} className="pl-4 text-veryDarkGrayishBlue">
          <input
            className="bg-veryDarkDesaturatedBlue 
            outline-none focus:outline-none
            focus:text-lightGrayishBlueHover text-xs font-normal"
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
