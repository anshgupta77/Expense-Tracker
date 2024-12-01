
// now navigate to ExpenseFormPage.jsx.
import React, { useState } from "react";

import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import { setExpensesInBackend } from "../services/localStorage";
const ExpenseListPage = ({setEditIndex, expenses, setExpenses}) => {
  const navigate = useNavigate();
  const handleEdit = (index) => {
    setEditIndex(index);
    navigate("/add");
  };

  const handleDelete = (ind) => {
    // const updatedData = [...expenses];
    // updatedData.splice(index, 1);
    // setExpenses(updatedData);
    // setEditIndex(-1);


    
    console.log("Deleted Index",ind);
    const updatedData = expenses.filter((_,index) => {
        // console.log(index);
        return ind!==index;
    })
    setExpenses(updatedData);
  };

  return (
        <ExpenseList 
        handleEdit={handleEdit}
        handleDelete = {handleDelete}
        expenses = {expenses}>
        </ExpenseList>
  );
};

export default ExpenseListPage;