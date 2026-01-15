import Dropdown from "./Dropdown";

const Header = ({
  numOfTasks = 0,
  numOfCompletedTasks = 0,
  onSortByPriority,
}: {
  numOfTasks: number;
  numOfCompletedTasks: number;
  onSortByPriority: (option: string) => void;
}) => {

  return (
    <>
      <h1 className="text-center text-2xl font-bold p-4 bg-blue-500 text-white rounded-xl my-4">
        To Do List
      </h1>
      <div className="relative">
        <div></div>
        <p className="text-sm text-slate-500 text-center">
          {numOfTasks} tasks · {numOfCompletedTasks} completed
        </p>
        {
          <Dropdown
            handleSelectedPriorityOption={onSortByPriority}
          />
        }
      </div>
    </>
  );
};

export default Header;
