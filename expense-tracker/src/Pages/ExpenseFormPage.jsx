import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../Component/ExpenseForm";
function ExpenseFormPage() {
  
  //   const setPrice = (e) => {
    //     setformdata({ ...formdata, price: e.target.value });
    
    //   };
    //   const getDate = (e) => {
      //     setformdata({ ...formdata, date: e.target.value });
      //   };
      //   const getTitle = (e) => {
        //     setformdata({ ...formdata, title: e.target.value });
        //   };
//   const getCategory = (e) => {
  //     setformdata({ ...formdata, category: e.target.value });
  //   };
  // const handleFormData = (e) =>{
    //     setformdata({...formdata,[e.target.name]: e.target.value});
    // }
    
    const navigate = useNavigate();
    const formdataString = localStorage.getItem("data") || "[]";
    const formdata = JSON.parse(formdataString);
  const saveData = (expense) => {
    // e.preventDefault();
    formdata.push(expense);
    const updatedFormData = JSON.stringify(formdata);
    localStorage.setItem("data", updatedFormData);
    navigate("/view");
  };



  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <ExpenseForm onSaveExpense = {saveData}></ExpenseForm>
  
</div>
  )
}

export default ExpenseFormPage;