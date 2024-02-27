export default function NewTask() {
  return (
    <>
      <div
        className="flex items-center justify-start 
      w-[21rem] h-12
      bg-veryDarkDesaturatedBlue rounded-md
      pl-4"
      >
        <span className="w-5 h-5 border border-veryDarkGrayishBlue rounded-full " />
        <form className="pl-4 text-veryDarkGrayishBlue">
          <input
            className="bg-veryDarkDesaturatedBlue 
            outline-none focus:outline-none
            focus:text-lightGrayishBlueHover text-sm font-normal"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    </>
  );
}
