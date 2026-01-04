import { useState } from "react";

const sortByImg = "../sort-by.png";

const Header = ({
  numOfTasks = 0,
  numOfCompletedTasks = 0,
}: {
  numOfTasks: number;
  numOfCompletedTasks: number;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div className="dropdown">
          <button
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
          >
            <img
              width="24"
              height="24"
              src={sortByImg}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              alt="Sort by"
            />
          </button>
          <div
            className="absolute top-full right-0 mt-2 bg-black border border-gray-300 rounded-md shadow-lg z-10
w-32"
          >
            {" "}
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
              High
            </button>{" "}
            <button
              className="block w-full px-4 py-2
text-left hover:bg-gray-100"
            >
              Medium
            </button>{" "}
            <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
              Low
            </button>{" "}
          </div>
          {dropdownOpen && (
            <div
              className="dropdown-overlay"
              onClick={() => setDropdownOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
