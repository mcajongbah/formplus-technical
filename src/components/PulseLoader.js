import React from "react";

const PulseLoader = () => {
  return (
    <div className="w-full px-3 animate-pulse duration-75 shadow-[0px_4px_30px_rgba(0,0,0,0.08)] space-y-7 mt-7 rounded-sm flex flex-col items-start py-7">
      <div className="space-y-4 w-full">
        <div className="space-y-1">
          <div className="h-6 w-full bg-slate-200 rounded-sm"></div>
          <div className="h-6 w-32 bg-slate-200 rounded-sm"></div>
        </div>
        <div className="flex w-full space-y-2 flex-col">
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-full bg-slate-200 rounded"></div>
          <div className="h-2 w-20 bg-slate-200 rounded"></div>
        </div>
      </div>
      <div className="h-2 w-20 bg-slate-200 rounded"></div>
    </div>
  );
};

export default PulseLoader;
