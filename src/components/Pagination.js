import React from "react";

const Pagination = () => {
  return (
    <div className="flex mt-10 py-1 justify-between items-center md:px-10 ">
      <button>Previous</button>
      <p><span className="py-1 px-2 rounded-[3px] border border-[#3F3F3F]">1</span> of 14</p>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
