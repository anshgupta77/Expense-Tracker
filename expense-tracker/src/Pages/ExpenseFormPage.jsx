import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../Component/ExpenseForm";
import ExpenseList from "../Component/ExpenseList";
import { setExpensesInBackend } from "../services/localStorage";
function ExpenseFormPage({editId , setEditId, setExpenses, expenses, dispatch}) {
    const navigate = useNavigate();
    const formdata=expenses;
    const onSaveExpense = (expense) => {
      // e.preventDefault();
      if(editId > -1){
        dispatch({
          type: "Edit",
          payload: {expense: expense, id: expense.id}
        })
      }
      else{
          dispatch({
            type:"Add",
            payload: {expense: expense}
          })
      }
      setEditId(-1);
      navigate("/view");
    };



  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <ExpenseForm onSaveExpense = {onSaveExpense} editId={editId} setEditId={setEditId} expenses={expenses}></ExpenseForm>
    {/* <ExpenseList setEditIndex = {setEditIndex}></ExpenseList> */}
</div>
  )
}

export default ExpenseFormPage;