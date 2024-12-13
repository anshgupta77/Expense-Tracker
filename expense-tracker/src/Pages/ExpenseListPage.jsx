import React, { useReducer } from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, reverseExpense } from "../slices/expenseSlice";
import { RecentCategory } from "../slices/filterExpenseSlice";
import { setCategory } from "../slices/filterExpenseSlice";
  const ExpenseListPage = ({ setEditId, expenses, viewCard, setViewCard , reverseOrdering , setReverseOrdering}) => {
  const navigate = useNavigate();
  // const [filterState, filterDispatch] = useReducer(filterReducer);
  const dispatch = useDispatch();

  // const [selectedCategory, selectedCategoryDispatch] = useReducer(filterReducer,"");
  const selectedCategory = useSelector(RecentCategory);

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
  var filteredExpenses =
  selectedCategory === ""
  ? expenses
  : expenses.filter((expense) => expense.category === selectedCategory);
  
  function handleReverse(){
    // dispatch(reverseExpense());
    setReverseOrdering(prev => prev==="old" ? "new": "old");
    
    // filteredExpenses = [...filteredExpenses].reverse();
    console.log("Filtered expense in the reveerse" , filteredExpenses);
  }

  if(reverseOrdering === "new"){
    filteredExpenses = [...filteredExpenses].reverse();
  }
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

        <button
          onClick={handleReverse}
          className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 shadow-md"
        >
          {reverseOrdering}
        </button>
        {/* Filter Options */}
        <select
          value={selectedCategory}
          onChange={(e) =>{
            const selectCategory = e.target.value;
            dispatch(
              setCategory({selectCategory}),
            )
            {console.log('selectCategory======', selectCategory)}
          }
          }
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">All Categories</option>
          <option value="Movie">Movie</option>
          <option value="Shopping">Shopping</option>
          <option value="Personal">Personal</option>
          <option value="Food">Food</option>
        </select>



        {/* <select
          value={selectedCategory}
          onChange={(e) =>{
            const selectCategory = e.target.value;
            dispatch(
              setCategory({selectCategory}),
            )
            {console.log('selectCategory======', selectCategory)}
          }
          }
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="" hidden disabled >Sort by </option>
          <option value="Movie">Date</option>
          <option value="Shopping">Price</option>
        </select> */}



        
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