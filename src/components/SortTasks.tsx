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
      ${
        mode === "dark"
          ? "bg-veryDarkDesaturatedBlue text-darkGrayishBlue"
          : "bg-veryLightGray text-darkGrayishBlue"
      }`}
    >
      <button
        onClick={() => setFilter("All")}
        className={`${
          mode === "dark"
            ? "hover:text-lightGrayishBlueHover"
            : "hover:text-veryDarkGrayishBlue"
        } 
        ${currentFilter === "All" ? "text-brightBlue" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Active")}
        className={`${
          mode === "dark"
            ? "hover:text-lightGrayishBlueHover"
            : "hover:text-veryDarkGrayishBlue"
        }  ${currentFilter === "Active" ? "text-brightBlue" : ""}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={`${
          mode === "dark"
            ? "hover:text-lightGrayishBlueHover"
            : "hover:text-veryDarkGrayishBlue"
        }  ${currentFilter === "Completed" ? "text-brightBlue" : ""}`}
      >
        Completed
      </button>
    </div>
  );
}
