import { useState } from "react";

export default function SortTasks() {
  const [selectAll, setSelectAll] = useState(true);
  const [selectActive, setSelectActive] = useState(false);
  const [selectCompleted, setSelectCompleted] = useState(false);

  function selectSortAll() {
    setSelectAll(true);
    setSelectActive(false);
    setSelectCompleted(false);
  }
  function selectSortActive() {
    setSelectAll(false);
    setSelectActive(true);
    setSelectCompleted(false);
  }
  function selectSortCompleted() {
    setSelectAll(false);
    setSelectActive(false);
    setSelectCompleted(true);
  }
  return (
    <div
      className="flex items-center justify-around 
      w-[20.5rem] h-12
      bg-veryDarkDesaturatedBlue text-darkGrayishBlue rounded-md font-[500] text-sm
      mt-4"
    >
      <button
        onClick={() => selectSortAll()}
        className={selectAll ? "text-brightBlue" : ""}
      >
        All
      </button>
      <button
        onClick={() => selectSortActive()}
        className={selectActive ? "text-brightBlue" : ""}
      >
        Active
      </button>
      <button
        onClick={() => selectSortCompleted()}
        className={selectCompleted ? "text-brightBlue" : ""}
      >
        Completed
      </button>
    </div>
  );
}
