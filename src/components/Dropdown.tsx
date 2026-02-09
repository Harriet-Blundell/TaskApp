import { useState } from "react";
import { handleSelectedPriorityOption } from "@/types";
const sortByImg = "../sort-by.png";

const Dropdown = ({
  handleSelectedPriorityOption,
}: {
  handleSelectedPriorityOption: handleSelectedPriorityOption;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="dropdown h-0">
      <button
        role="button"
        aria-label="Open sort menu"
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <img
          width="20"
          src={sortByImg}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          alt="Sort by"
        />
      </button>
      {dropdownOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-black border border-gray-300 rounded-md shadow-lg z-10
w-32"
        >
          {" "}
          <button
            role="button"
            aria-label="Selected high priority"
            className="block w-full px-4 py-2 text-left text-white hover:bg-gray-100 hover:text-black"
            onClick={() => {
              handleSelectedPriorityOption("High");
              setDropdownOpen(false);
            }}
          >
            High
          </button>{" "}
          <button
            role="button"
            aria-label="Selected medium priority"
            className="block w-full px-4 py-2 text-left text-white hover:bg-gray-100 hover:text-black"
            onClick={() => {
              handleSelectedPriorityOption("Medium");
              setDropdownOpen(false);
            }}
          >
            Medium
          </button>{" "}
          <button
            role="button"
            aria-label="Selected low priority"
            className="block w-full px-4 py-2 text-left text-white hover:bg-gray-100 hover:text-black"
            onClick={() => {
              handleSelectedPriorityOption("Low");
              setDropdownOpen(false);
            }}
          >
            Low
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
