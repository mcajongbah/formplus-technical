import React from "react";

const ResultsLayout = ({ children, data}) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex items-center justify-between">
        <p>All Templates</p>
        <p className="text-sm text-[#989898]">{data.length} templates</p>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7">
        {children}
      </div>
    </div>
  );
};

export default ResultsLayout;
