import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../Component/ExpenseForm";
import { getExpensesFromLocals, setExpensesInLocals } from "../service/localStorage";
function ExpenseFormPage({editIndex , setEditIndex}) {
    const navigate = useNavigate();
    const onSaveExpense = (expense) => {
      console.log(editIndex);
      const expenses = getExpensesFromLocals();
      if(editIndex > -1){
        expenses[editIndex] = expense;
      }
      else{
        expenses.push(expense);
      }
      setExpensesInLocals(expenses);
      setEditIndex(-1);
      navigate("/view");
    };
  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <ExpenseForm onSaveExpense = {onSaveExpense} editIndex={editIndex} setEditIndex={setEditIndex}></ExpenseForm>
  
</div>
  )
}

export default ExpenseFormPage;