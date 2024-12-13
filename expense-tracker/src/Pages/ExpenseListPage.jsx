import React, { useReducer } from "react";
import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../Component/ExpenseCard";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, reverseExpense } from "../slices/expenseSlice";
import { RecentCategory, RecentSort } from "../slices/filterExpenseSlice";
import { setCategory, setSortBy, clearSortBy } from "../slices/filterExpenseSlice";
  const ExpenseListPage = ({ setEditId, expenses, viewCard, setViewCard , reverseOrdering , setReverseOrdering}) => {
  const buttonText = viewCard ? "View as List" : "View as Card";
    
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sortBy = useSelector(RecentSort);
  const selectedCategory = useSelector(RecentCategory);
  const filterButtonText = sortBy === ""? "filter" : "Reset Sort";
  const orderButtonText = reverseOrdering ? "ort to Ascending order": "Sort to Descending order";

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
  function handleReverse(){
    setReverseOrdering(prev => !prev);
  }

  function clearSort(){
    dispatch(clearSortBy());
  }


  
  
  var filteredExpenses =
  selectedCategory === ""
  ? expenses
  : expenses.filter((expense) => expense.category === selectedCategory);
  

  // if(reverseOrdering === "new"){
  //   filteredExpenses = [...filteredExpenses].reverse();
  // }

  if(sortBy === "date"){
    filteredExpenses = [...filteredExpenses].sort((a,b) =>{
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    })
  }

  if(sortBy === "price"){
    filteredExpenses = [...filteredExpenses].sort((a,b) =>{
      const priceA = a.price;
      const priceB = b.price;
      return priceA-priceB;
    })
  }

  return (
    <>
      <div className="my-4 flex items-center justify-center gap-4">
      
        <button
          onClick={handleView}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 shadow-md"
        >
          {buttonText}
        </button>
        {sortBy ?
        <button
        onClick={handleReverse}
        className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 shadow-md"
      >
        {orderButtonText}
      </button> : <></>}
        



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


      <div className="flex flex-col items-start">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="date"
              checked = {sortBy === "date"}
              onChange={(e) =>{
                const selectSort = e.target.value;
                dispatch(setSortBy({selectSort}))
              }}
              className="accent-blue-500"
       
            />
            Sort by Date
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="price"
              checked={sortBy === "price"}
              onChange={(e) =>{
                const selectSort = e.target.value;
                dispatch(setSortBy({selectSort}))
              }}
              className="accent-blue-500"
           
            />
            Sort by Price
          </label>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md"
          onClick={clearSort}
        >
          {filterButtonText}
        </button>
      </div>
      {!viewCard ? (
        <ExpenseList
          reverseOrdering = {reverseOrdering}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          filteredExpenses={filteredExpenses || null}
        />
      ) : (
        <ExpenseCard
          reverseOrdering= {reverseOrdering}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          filteredExpenses={filteredExpenses || null}
        />
      )}
    </>
  );
};

export default ExpenseListPage;