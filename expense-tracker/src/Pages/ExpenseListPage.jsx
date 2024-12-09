import React from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";
import { useState } from "react";

const ExpenseListPage = ({ setEditId, expenses, dispatch, viewCard }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log("ViewCard", viewCard);
  const handleEdit = (id) => {
    setEditId(id);
    navigate("/add");
  };

  const handleDelete = (id) => {
    dispatch({
      type: "Delete",
      payload: { id },
    });
  };
 
  
  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>

          <div className="my-4 flex justify-center items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">All Categories</option>
                <option value="movie">Movie</option>
                <option value="Shopping">Shopping</option>
                <option value="Personal">Personal</option>
                <option value="Food">Food</option>
              </select>
              <button
                onClick={() => {
                  // Intentionally left blank as filtering happens dynamically
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Filter
              </button>
            </div>
      {!viewCard ? (
        <ExpenseList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          filteredExpenses={filteredExpenses || null}
        />
      ) : (
        <ExpenseCard
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          filteredExpenses={filteredExpenses || null}
        />
      )}
    </>
  );
};

export default ExpenseListPage;
