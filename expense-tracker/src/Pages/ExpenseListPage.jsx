import React, { useReducer } from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";
import { useState } from "react";
import {filterReducer, initialFilterState} from "../Component/reducer/filterReducer";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../slices/expenseSlice";
const ExpenseListPage = ({ setEditId, expenses, viewCard, setViewCard }) => {
  const navigate = useNavigate();
  // const [filterState, filterDispatch] = useReducer(filterReducer);
  const dispatch = useDispatch();

  const [selectedCategory, selectedCategoryDispatch] = useReducer(filterReducer,"");

  const handleEdit = (id) => {
    setEditId(id);
    navigate("/add");
  };

  const handleDelete = (id) => {
    dispatch(deleteExpense({id}));
  };

  function handleView() {
    const prev = viewCard;
    setViewCard(!prev);
  }

  // const { selectedCategory } = filterState;
  const filteredExpenses =
    selectedCategory === ""
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const buttonText = viewCard ? "View as List" : "View as Card";

  return (
    <>
      <div className="my-4 flex items-center justify-center gap-4">
        {/* View as Card Button */}
        <button
          onClick={handleView}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 shadow-md"
        >
          {buttonText}
        </button>
        {/* Filter Options */}
        <select
          value={selectedCategory}
          onChange={(e) =>
            selectedCategoryDispatch({
              type: "SET_CATEGORY",
              payload: e.target.value,
            })
          }
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">All Categories</option>
          <option value="Movie">Movie</option>
          <option value="Shopping">Shopping</option>
          <option value="Personal">Personal</option>
          <option value="Food">Food</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md"
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