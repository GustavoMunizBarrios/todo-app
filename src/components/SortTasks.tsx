interface SortTasksProps {
  setFilter: React.Dispatch<
    React.SetStateAction<"All" | "Active" | "Completed">
  >;
  currentFilter: "All" | "Active" | "Completed";
  mode: "light" | "dark";
}
export default function SortTasks({
  setFilter,
  currentFilter,
  mode,
}: SortTasksProps) {
  return (
    <div
      className={`flex items-center justify-around 
      w-[20.5rem] h-12
       rounded-md font-[500] text-sm
      mt-4
      ${mode === "dark" ? "bg-veryDarkDesaturatedBlue " : "bg-veryLightGray "}`}
    >
      <button
        onClick={() => setFilter("All")}
        className={`${
          mode === "dark"
            ? "hover:text-lightGrayishBlueHover"
            : "hover:text-veryDarkGrayishBlue"
        } 
        ${
          currentFilter === "All" ? "text-brightBlue" : "text-darkGrayishBlue"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Active")}
        className={`${
          mode === "dark"
            ? "hover:text-lightGrayishBlueHover"
            : "hover:text-veryDarkGrayishBlue"
        }  ${
          currentFilter === "Active"
            ? "text-brightBlue"
            : "text-darkGrayishBlue"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={`${
          mode === "dark"
            ? "hover:text-lightGrayishBlueHover"
            : "hover:text-veryDarkGrayishBlue"
        }  ${
          currentFilter === "Completed"
            ? "text-brightBlue"
            : "text-darkGrayishBlue"
        }`}
      >
        Completed
      </button>
    </div>
  );
}
