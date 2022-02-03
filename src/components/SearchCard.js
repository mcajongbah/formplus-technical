import React from "react";

const SearchCard = ({ item: { name, description, link } }) => {
  return (
    <div className="w-full relative h-44 shadow-[0px_4px_30px_rgba(0,0,0,0.08)] space-y-7 mt-7 rounded flex flex-col items-start pt-6">
      <div className="px-2 space-y-4">
        <h2 className="text-2xl font-medium">
          {name}
        </h2>
        <p className="text-sm text-[#3F3E3E]">
          {description}
        </p>
      </div>
      <span className="text-[#08BD37] absolute bottom-0 w-full px-2 flex items-center bg-[#F9F9F9] h-10 cursor-pointer">
        <a href={link}>Use Template</a>
      </span>
    </div>
  );
};

export default SearchCard;
