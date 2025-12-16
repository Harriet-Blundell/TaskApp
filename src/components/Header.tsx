const Header = ({
  numOfTasks,
  numOfCompletedTasks,
}: {
  numOfTasks: number;
  numOfCompletedTasks: number;
}) => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold p-4 bg-blue-500 text-white rounded-xl my-4">
        To Do List
      </h1>
      <p className="text-sm text-slate-500 text-center">
        {numOfTasks} tasks · {numOfCompletedTasks} completed
      </p>
    </>
  );
};

export default Header;
