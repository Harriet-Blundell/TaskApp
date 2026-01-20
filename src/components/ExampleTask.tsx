export const TableHeaders = () => {
  return (
    <div className="flex justify-between bg-slate-100 text-black py-2 px-2 text-[10px] sm:text-sm rounded-xl mb-3">
      <div className="flex justify-between w-3/4">
        <p className="w-1/4 ">Delete</p>
        <p className="w-3/4">Task</p>
      </div>
      <div className="flex w-1/4">
        <p className="px-6">P</p>
        <p className="w-7 ml-auto">Done? </p>
      </div>
    </div>
  );
};