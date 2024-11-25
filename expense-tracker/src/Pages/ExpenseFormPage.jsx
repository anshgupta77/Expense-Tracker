import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../Component/ExpenseForm";
function ExpenseFormPage({editIndex , setEditIndex}) {
    const navigate = useNavigate();
    const formdataString = localStorage.getItem("data") || "[]";
    const formdata = JSON.parse(formdataString);
    const onSaveExpense = (expense) => {
      // e.preventDefault();
      console.log(editIndex);
      if(editIndex > -1){
        formdata[editIndex] = expense;
      }
      else{
        formdata.push(expense);
      }
      const updatedFormData = JSON.stringify(formdata);
      localStorage.setItem("data", updatedFormData);
      navigate("/view");
    };



  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <ExpenseForm onSaveExpense = {onSaveExpense} editIndex={editIndex} setEditIndex={setEditIndex}></ExpenseForm>
  
</div>
  )
}

export default ExpenseFormPage;