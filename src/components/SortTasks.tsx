export default function SortTasks() {
  return (
    <div
      className="flex items-center justify-around 
      w-[20.5rem] h-12
      bg-veryDarkDesaturatedBlue text-darkGrayishBlue rounded-md font-[500] text-sm
      mt-4"
    >
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
