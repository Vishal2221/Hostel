import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const Navigate = useNavigate();

  return (
    <div className="m-2 w-auto">
      {" "}
      <button
        className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mb-2 bg-yellow-400 pr-5 rounded-2xl"
        onClick={() => Navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 24"
          stroke="currentColor"
          className="w-8 h-8 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}
export default BackButton;
