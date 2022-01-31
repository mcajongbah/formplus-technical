import React from "react";

const Toast = () => {
  return (
    <div className="w-full mt-6 md:mt-[85px] bg-[#FFF4EA] md:h-10 h-auto px-2 py-1 md:px-0 md:py-0 flex items-center justify-center text-center">
      <div className="flex items-center justify-center space-x-1 md:space-x-6">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FC830A"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <p className="text-sm font-normal">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </p>
      </div>
    </div>
  );
};

export default Toast;
