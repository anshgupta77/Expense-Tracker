import React, { useReducer } from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";
import { useState } from "react";
import {filterReducer, initialFilterState} from "../Component/reducer/FilterReducer";
const ExpenseListPage = ({ setEditId, expenses, dispatch, viewCard }) => {
  const navigate = useNavigate();
  const [filterState, filterDispatch] = useReducer(
    filterReducer, 
    initialFilterState
  );
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
 
  const {selectedCategory} = filterState;
  const filteredExpenses = selectedCategory === ""? expenses: expenses.filter(expense => expense.category === selectedCategory);
  return (
    <>

          <div className="my-4 flex justify-center items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => filterDispatch({
                  type: "SET_CATEGORY",
                  payload: e.target.value
                })}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">All Categories</option>
                <option value="Movie">Movie</option>
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
