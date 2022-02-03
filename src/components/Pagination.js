import React from "react";

const Pagination = ({ currentPage, prevPage, nextPage, numberOfPages }) => {
  return (
    <div className="flex mt-10 py-1 justify-between items-center md:px-10 ">
      <button
        className="disabled:text-gray-400 outline-none font-semibold"
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        Previous
      </button>
      <p>
        <span className="py-1 px-2 rounded-[3px] border border-[#3F3F3F]">
          {currentPage}
        </span>{" "}
        of {numberOfPages}
      </p>
      <button
        className="disabled:text-gray-400 outline-none font-semibold"
        disabled={currentPage === numberOfPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
