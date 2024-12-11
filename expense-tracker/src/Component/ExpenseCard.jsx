import { useState } from "react";

const ExpenseCard = ({ handleEdit, filteredExpenses, handleDelete }) => {
  

  if (!filteredExpenses) {
    return (
      <div className="text-center mt-4 text-gray-700">
        Loading expenses, please wait...
      </div>
    );
  }

  
  

  return (
    <div className="w-[90%] mx-auto">
      {/* Expense Cards */}
      <div className="min-h-screen flex flex-wrap justify-between items-start bg-gray-100 p-4">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((item, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white shadow-md rounded-lg border border-gray-300 p-4 mb-4"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">
                <span className="font-medium">Price:</span> {item.price}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Date:</span> {item.date}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Category:</span> {item.category}
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-700 font-medium w-full">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;