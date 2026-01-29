export const TableHeaders = () => {
  return (
    <div className="flex justify-between bg-slate-100 dark:bg-slate-600 dark:text-white text-black py-2 px-2 text-[10px] sm:text-sm rounded-xl mb-3">
      <div className="flex">
        <p className="w-16 pr-5">Delete</p>
        <p>Task</p>
      </div>
      <div className="flex w-1/4">
        <p className="px-6 ml-auto">
          <span className="inline sm:hidden ">P</span>
          <span className="hidden sm:inline">Priority</span>
        </p>
        <p className="w-8 ml-auto sm:mr-2">Done</p>
      </div>
    </div>
  );
};
