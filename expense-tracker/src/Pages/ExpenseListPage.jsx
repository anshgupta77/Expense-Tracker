
// now navigate to ExpenseFormPage.jsx.
import React, { useState } from "react";

import ExpenseList from "../Component/ExpenseList";
import { useNavigate } from "react-router-dom";
import { setExpensesInBackend } from "../services/localStorage";
const ExpenseListPage = ({setEditIndex, expenses, setExpenses, dispatch}) => {
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
    dispatch({
        type: "Delete",
        payload: {ind: ind},
    })

    
    
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