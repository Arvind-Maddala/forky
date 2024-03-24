import React, { useState } from "react";

const SearchModal = ({ isModalOpen, onClose, setSearchItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setSearchItem(inputValue);
    setInputValue("");
    onClose();
  };
  const handleClose = () => {
    setInputValue("");
    onClose();
  };
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isModalOpen ? "block" : "hidden"
      } bg-gray-900 bg-opacity-50 z-50 `}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[600px]">
        {/* Modal content */}
        <div className="text-xl font-semibold mb-8">
          Search for Food or Restaurants
        </div>
        <div className="relative">
          <input
            className="w-full h-12 rounded-lg outline-none border border-gray-300 px-4 py-2 pl-10"
            onChange={(e) => handleChange(e)}
            value={inputValue}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex justify-end mt-5">
          <button
            className="mt-4 text-xl bg-customOrange w-24  text-white py-2  rounded"
            onClick={handleClick}
          >
            Search
          </button>
          <button
            className="mt-4 mx-4 text-xl bg-customOrange w-24  text-white py-2 rounded"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
