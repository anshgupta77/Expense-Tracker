import React from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../Component/ExpenseForm";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "../slices/expenseSlice";
function ExpenseFormPage({editId , setEditId, setExpenses, expenses, }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formdata=expenses;
    const onSaveExpense = (expense, editId) => {
      if(editId > -1){
        dispatch(editExpense({editId, expense}))
      }
      else{
          console.log("In the expenseForm", expense);
          dispatch(addExpense({expense}))
      }
      setEditId(-1);
      navigate("/view");
    };



  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    <ExpenseForm onSaveExpense = {onSaveExpense} editId={editId} setEditId={setEditId} expenses={expenses}></ExpenseForm>
</div>
  )
}

export default ExpenseFormPage;