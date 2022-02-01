import React, { useState } from "react";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    template: "",
    category: "all",
    order: "default",
    date: "default",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex-col md:space-y-0 space-y-8 flex md:flex-row justify-between items-center">
      <div className="h-[45px] border rounded-sm px-2 w-full md:w-[319px] flex items-center">
        <input
          onChange={handleChange}
          className="outline-none px-2 w-full placeholder:text-xs"
          type="text"
          value={formData.template}
          name="template"
          id="template"
          placeholder="Search Templates"
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#8F8B8B"
          >
            <path
              strokeline="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto text-gray-500 md:items-center space-y-3 md:space-y-0 md:space-x-5">
        <p className="text-[#989898] text-sm font-normal w-full">Sort By:</p>
        <div className="w-full flex flex-col md:flex-row items-center md:space-x-5 space-y-4 md:space-y-0">
          <fieldset className="border w-full px-4 rounded-sm h-[45px]">
            <legend className="text-xs">Category</legend>
            <select
              className="w-full md:w-32 outline-none"
              name="category"
              value={formData.category}
              onChange={handleChange}
              id="category"
            >
              <option value="all">All</option>
              <option value="education">Education</option>
              <option value="e-commerce">E-Commerce</option>
              <option value="health">Health</option>
            </select>
          </fieldset>

          <fieldset className="border w-full px-4 h-[45px]">
            <legend className="text-xs">Order</legend>
            <select
              className="w-full md:w-32  outline-none"
              name="order"
              value={formData.order}
              onChange={handleChange}
              id="order"
            >
              <option value="default">Default</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </fieldset>

          <fieldset className="border w-full px-4 h-[45px]">
            <legend className="text-xs">Date</legend>
            <select
              className="w-full md:w-32  outline-none"
              name="date"
              value={formData.date}
              onChange={handleChange}
              id="date"
            >
              <option value="default">Default</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
