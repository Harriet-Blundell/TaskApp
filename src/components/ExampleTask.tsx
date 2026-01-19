import { Task } from "@/types";

export const TableHeaders = () => {
  return (
    <div className="flex justify-between bg-slate-100 py-2 px-2 rounded-xl">
      <div className="flex">
        <p className="w-20">Delete</p>
        <p className="pl-[5vw]">Task</p>
      </div>
      <div className="flex">
        <p className="pr-[5vw] w-35">Priority</p>
        <p className="w-25">Completed? </p>
      </div>
    </div>
  );
};
