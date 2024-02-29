interface SortTasksProps {
  setFilter: React.Dispatch<
    React.SetStateAction<"All" | "Active" | "Completed">
  >;
  currentFilter: "All" | "Active" | "Completed";
}
export default function SortTasks({
  setFilter,
  currentFilter,
}: SortTasksProps) {
  return (
    <div
      className="flex items-center justify-around 
      w-[20.5rem] h-12
      bg-veryDarkDesaturatedBlue text-darkGrayishBlue rounded-md font-[500] text-sm
      mt-4"
    >
      <button
        onClick={() => setFilter("All")}
        className={currentFilter === "All" ? "text-brightBlue" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Active")}
        className={currentFilter === "Active" ? "text-brightBlue" : ""}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("Completed")}
        className={currentFilter === "Completed" ? "text-brightBlue" : ""}
      >
        Completed
      </button>
    </div>
  );
}
