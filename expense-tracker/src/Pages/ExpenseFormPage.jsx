import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../Component/ExpenseForm";
import ExpenseList from "../Component/ExpenseList";
import { setExpensesInBackend } from "../services/localStorage";
function ExpenseFormPage({editIndex , setEditIndex, setExpenses, expenses, dispatch}) {
    const navigate = useNavigate();
    const formdata=expenses;
    const onSaveExpense = (expense) => {
      // e.preventDefault();
      console.log(editIndex);
      if(editIndex > -1){
        dispatch({
          type: "Edit",
          payload: {expense: expense, editIndex: editIndex}
        })
      }
      else{
          console.log("In the expenseForm", expense);
          dispatch({
            type:"Add",
            payload: {expense: expense}
          })
      }
      // const updatedFormData = formdata;
      // setExpenses(formdata);
      // setExpensesInBackend(formdata).then(() =>console.log("Expenses is saved in backend"));
      navigate("/view");
    };



  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <ExpenseForm onSaveExpense = {onSaveExpense} editIndex={editIndex} setEditIndex={setEditIndex} expenses={expenses}></ExpenseForm>
    {/* <ExpenseList setEditIndex = {setEditIndex}></ExpenseList> */}
</div>
  )
}

export default ExpenseFormPage;