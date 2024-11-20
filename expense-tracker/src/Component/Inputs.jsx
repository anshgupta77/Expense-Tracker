import React from "react";
export const Date = ({ value, onChange }) => {
    return (
      <div className="w-full">
        <label htmlFor="date" className="w-full mb-2 text-gray-300 font-semibold">
          Date:
        </label>
        <input
          type="date"
          className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={value}
          name="date"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };
  export const Price = ({ value, onChange }) => {
    return (
    <div className="w-full">
        <label htmlFor="price" className="w-full mb-2 text-gray-300 font-semibold">
          Price
        </label>
        <input
          type="number"
          className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={value}
          name="price"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };
  export const Title = ({ value, onChange }) => {
    return (
     <div className="w-full">
        <label htmlFor="title" className="w-full mb-2 text-gray-300 font-semibold">
          Title:
        </label>
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          value={value}
          name="title"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };
  export const Category = ({ value, onChange }) => {
    return (
    <div className="w-full">
        <label htmlFor="category" className="w-full mb-2 text-gray-300 font-semibold">
          Category:
        </label>
        <select
          id="options"
          name="category"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        >
          <option value="" disabled selected hidden>
            Choose an option
          </option>
          <option value="Food">Food</option>
          <option value="Movie">Movie</option>
          <option value="Shopping">Shopping</option>
          <option value="Personal">Personal</option>
    
        </select>
      </div>
    );
  };

