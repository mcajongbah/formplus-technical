import React from "react";
import { Link } from "react-router-dom";

const SearchCard = () => {
  return (
    <div className="w-full shadow-[0px_4px_30px_rgba(0,0,0,0.08)] space-y-7 mt-7 rounded flex flex-col items-start pt-6">
      <div className="px-2 space-y-4">
        <h2 className="text-2xl font-medium">
          Alumni Membership Form Template
        </h2>
        <p className="text-sm text-[#3F3E3E]">
          Engage your alumni network better with this alumni registration form
          template. Embed this in your website ...
        </p>
      </div>
      <span className="text-[#08BD37] w-full px-2 flex items-center bg-[#F9F9F9] h-10 cursor-pointer">
        <Link to="/templates">Use Template</Link>
      </span>
    </div>
  );
};

export default SearchCard;
