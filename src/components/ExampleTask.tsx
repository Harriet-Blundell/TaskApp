export const TableHeaders = () => {
  return (
    <div className="flex justify-between bg-slate-100 dark:bg-slate-600 dark:text-white text-black py-2 px-2 text-[10px] sm:text-sm rounded-xl mb-3">
      <div className="flex">
        <p className="w-[4rem] pr-5">Delete</p>
        <p className="">Task</p>
      </div>
      <div className="flex w-1/4">
        <p className="ml-auto">P</p>
        <p className="w-[2rem] ml-auto">Done? </p>
      </div>
    </div>
  );
};